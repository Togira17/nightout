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
}
