import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Entrada } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
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
    // Aquí deberías actualizar la cantidad en el carrito (localStorage)
    const carrito = this.cartService.obtenerCarrito();
    const index = carrito.findIndex(item => item.id === entrada.id);
    if (index !== -1) {
      carrito[index].cantidad = cantidad;
      localStorage.setItem('carrito', JSON.stringify(carrito));
      this.obtenerCarrito(); // Para actualizar la vista
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
        //alert('Compra realizada con éxito');
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

}
