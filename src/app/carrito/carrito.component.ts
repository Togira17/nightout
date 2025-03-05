import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Entrada } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

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
  backendUrl: string = environment.backendUrl;

  constructor(private router: Router, private cartService: CartService, private cdr: ChangeDetectorRef, private http: HttpClient) { }

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
    this.subtotal = this.carrito.reduce((total, entrada) => {
      return total + (parseFloat(entrada.precio) * entrada.cantidad);
    }, 0);
    this.total = this.subtotal;
  }

  actualizarCantidad(entrada: Entrada, cantidad: number): void {
    if (cantidad < 1) {
      console.log("La cantidad no puede ser menor a 1.${entrada.stock_individual}");
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
    this.obtenerCarrito();
  }

  verificarSesion() {
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

    this.http.post(this.backendUrl, datosCompra).subscribe(
      response => {
        console.log('Compra realizada con éxito:', response);
        this.enviarCorreoConfirmacion(usuario, carrito);
        localStorage.removeItem('carrito'); 
        this.carrito = [];
        this.carritoVacio = true; 
        this.total = 0;
        setTimeout(() => {
          location.reload();
        }, 2000);         
      },
      error => {
        console.error('Error al procesar la compra:', error);
        alert('Hubo un error al procesar la compra');
      }
    );
  }
// Función para generar la URL del código QR usando la API de QR Server
private generarQrCodeUrl(nombre: string, id: string, tipo_entrada: string): string {
  const qrData = encodeURIComponent(`Nombre: ${nombre}, ID: ${id}, Tipo: ${tipo_entrada}`);
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;
}

// Enviar el correo de confirmación con los códigos QR
async enviarCorreoConfirmacion(usuario: any, carrito: any[]) {
  const totalCompra = carrito.reduce((total, p) => total + (parseFloat(p.precio) * p.cantidad), 0).toFixed(2);

  // Construcción de la tabla de resumen de compra
  let resumenCompra = `
    <table width="100%" cellpadding="10" cellspacing="0" border="1" style="border-collapse: collapse; text-align: left; width: 100%;">
      <thead>
        <tr style="background-color: #f3f3f3; text-align: center;">
          <th>Producto</th>
          <th>Tipo de Entrada</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
  `;

  let qrImages = "";

  carrito.forEach(producto => {
    resumenCompra += `
      <tr style="text-align: center;">
        <td>${producto.nombre}</td>
        <td>${producto.tipo_entrada}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}€</td>
      </tr>
    `;

    // Generar un QR por cada entrada con información y agradecimiento
    for (let i = 0; i < producto.cantidad; i++) {
      const qrUrl = this.generarQrCodeUrl(producto.nombre, producto.id.toString(), producto.tipo_entrada);
      qrImages += `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 15px; border: 1px solid #ddd; margin-bottom: 15px;">
          <div style="flex: 1; padding-right: 20px;">
            <h3 style="color: #5f3fc3;">${producto.nombre} - Entrada ${i + 1}</h3>
            <p><strong>Tipo:</strong> ${producto.tipo_entrada}</p>
            <p><strong>ID:</strong> ${producto.id}</p>
            <p>¡Gracias por tu compra! Esperamos que disfrutes del evento.</p>
          </div>
          <div>
            <img src="${qrUrl}" alt="Código QR" width="150" height="150" style="border: 1px solid #ddd; padding: 5px;"/>
          </div>
        </div>
      `;
    }
  });

  resumenCompra += `</tbody></table>`;

  // Parámetros del correo
  const emailParams = {
    to_email: usuario.email,
    subject: "Confirmación de tu compra en Nightoutsevilla",
    message: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #5f3fc3; text-align: center;">¡Gracias por tu compra, ${usuario.first_name}!</h2>
      <p>Hemos recibido tu pedido y aquí tienes un resumen de tu compra:</p>
      ${resumenCompra}
      <p style="font-size: 18px;"><strong>Total: ${totalCompra}€</strong></p>
      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
      <h3 style="text-align: center;">Tus códigos QR para cada entrada:</h3>
      ${qrImages}
      <p style="text-align: center; margin-top: 20px;">
        <a href="https://docs.google.com/forms/d/1jCeEqDfjN5B4KkfSOpp4u0OJ7U-r7gLtYhU4NaiEbsg/edit" 
           style="display: inline-block; padding: 10px 20px; background-color: #5f3fc3; color: #fff; text-decoration: none; border-radius: 5px;">
          Rellena nuestro formulario de opinión
        </a>
      </p>
      <p style="text-align: center; font-size: 14px; color: black;">
        Saludos,<br>
        <strong>El equipo de Nightoutsevilla</strong>
      </p>
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
