import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Entrada } from '../services/cart.service'; // Asegúrate de importar la clase Entrada

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carrito: Entrada[] = [];
  subtotal: number = 0;
  gastosServicio: number = 3;
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.obtenerCarrito();
  }

  obtenerCarrito(): void {
    this.carrito = this.cartService.obtenerCarrito();
    this.calcularTotales();
  }

  calcularTotales(): void {
    this.subtotal = this.carrito.reduce((total, entrada) => total + parseFloat(entrada.precio), 0);
    this.total = this.subtotal + this.gastosServicio;
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
}
