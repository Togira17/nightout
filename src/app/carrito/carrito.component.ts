import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Entrada } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

declare var bootstrap: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  publicKey: string = "MdEGfO8nqJO-digJf";
  carrito: Entrada[] = [];
  carritoVacio: boolean = true;
  subtotal: number = 0;
  total: number = 0;
  modalObjetivo: string = '';
  apiUrl: string = 'http://mibackend.duckdns.org/api/pedido.php';

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef, private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerCarrito();
    this.verificarSesion();
  }


  obtenerCarrito(): void {
    this.carrito = this.cartService.obtenerCarrito();
    this.carritoVacio = this.carrito.length === 0;
    this.calcularTotales();
  }

  calcularTotales(): void {
    // Calcular el subtotal sumando el precio de cada producto * su cantidad
    this.subtotal = this.carrito.reduce((total, entrada) => {
      return total + (parseFloat(entrada.precio) * entrada.cantidad);  // Multiplicamos por la cantidad
    }, 0);

    // El total es igual al subtotal, ya que no hay gastos de servicio
    this.total = this.subtotal;
  }

  actualizarCantidad(entrada: Entrada, cantidad: number): void {
    if (cantidad < 1) {
      alert("La cantidad no puede ser menor a 1.${entrada.stock_individual}");
      return;
    }
    if (cantidad > entrada.stock_individual) {
      alert(`No puedes añadir más de ${entrada.stock_individual} unidades.`);
      return;
    }
  
    const carrito = this.cartService.obtenerCarrito();
    const index = carrito.findIndex(item => item.id === entrada.id);
    if (index !== -1) {
      carrito[index].cantidad = cantidad;
      localStorage.setItem('carrito', JSON.stringify(carrito));
      this.obtenerCarrito();
    }
  }
  

  eliminarProducto(entrada: Entrada): void {
    let carrito = this.cartService.obtenerCarrito();
    carrito = carrito.filter(item => item.id !== entrada.id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    this.obtenerCarrito(); // Actualizar la vista
  }

  verificarSesion() {
    // Comprobar si hay token y asignar el modal correspondiente
    this.modalObjetivo = localStorage.getItem('token') ? '#compraConfirmada' : '#accesoRequerido';
  }

  intentarCompra() {
    const token = localStorage.getItem('token');
    if (token) {
      this.realizarCompra();
    }
  }
  realizarCompra() {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

    if (!usuario.email || carrito.length === 0) {
      console.error('No se puede procesar la compra: faltan datos.');
      return;
    }

    const datosCompra = {
      usuario: usuario.email,
      carrito: carrito.map((producto: any) => ({
        id_producto: producto.id,
        cantidad: producto.cantidad
      }))
    };

    // Depuración: Mostrar los datos en la consola antes de enviarlos
    //console.log(' Datos que se enviarían a la API:', JSON.stringify(datosCompra, null, 2));

    
    this.http.post(this.apiUrl, datosCompra).subscribe(
      response => {
        console.log('Compra realizada con éxito:', response);

        // ENVIAR EMAIL CON EL RESUMEN DE LA COMPRA
        this.enviarCorreoConfirmacion(usuario, carrito);

        //alert('Compra realizada con éxito');
        //Vaciar el carrito tras la compra
        localStorage.removeItem('carrito'); 
        this.carrito = [];
        this.carritoVacio = true; 
        this.total = 0;
      },
      error => {
        console.error('Error al procesar la compra:', error);
        alert('Hubo un error al procesar la compra');
      }
    );
    

  }

  enviarCorreoConfirmacion(usuario: any, carrito: any[]) {
    let resumenCompra = `
      <table width="100%" cellpadding="10" cellspacing="0" border="1" style="border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f3f3f3;">
            <th>Producto</th>
            <th>Tipo de Entrada</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
    `;

    carrito.forEach(producto => {
      resumenCompra += `
        <tr>
          <td>${producto.nombre}</td>
          <td>${producto.tipo_entrada}</td>
          <td>${producto.cantidad}</td>
          <td>${producto.precio}€</td>
        </tr>
      `;
    });

    resumenCompra += `
        </tbody>
      </table>
    `;

    const emailParams = {
      to_email: usuario.email,
      subject: "Confirmación de tu compra en Nightoutsevilla",
      message: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center">
              <h2 style="color: #5f3fc3; margin-bottom: 10px;">¡Gracias por tu compra, ${usuario.first_name}!</h2>
            </td>
          </tr>
          <tr>
            <td>
              <p>Hemos recibido tu pedido y aquí tienes un resumen de tu compra:</p>
            </td>
          </tr>
          <tr>
            <td>${resumenCompra}</td>
          </tr>
          <tr>
            <td>
              <p>Total: <strong>${carrito.reduce((total, p) => total + (parseFloat(p.precio) * p.cantidad), 0).toFixed(2)}€</strong></p>
            </td>
          </tr>
          <tr>
            <td>
              <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
            </td>
          </tr>
          <tr>
            <td align="center">
              <p style="font-size: 14px; color: black; margin: 0;">
                Saludos,<br>
                <strong>El equipo de Nightoutsevilla</strong>
              </p>
            </td>
          </tr>
        </table>
      </div>
      `
    };

    emailjs.send("contact_service", "contact_form", emailParams, this.publicKey)
      .then(() => {
        console.log("Correo de confirmación enviado con éxito a:", usuario.email);
      })
      .catch(error => {
        console.error("Error al enviar el correo de confirmación:", error);
      });
}


}
