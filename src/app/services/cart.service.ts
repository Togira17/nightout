import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';  // Importa HttpClient
import { Observable } from 'rxjs';  // Para manejar las respuestas asíncronas

export class Entrada {
  id: string;
  nombre: string;
  precio: string;
  stock_actual: number;
  tipo_entrada: string;

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
    this.precio = '';
    this.stock_actual = 0;
    this.tipo_entrada = '';
  }

  completarDatos(datos: any[]): void {
    const entradaEncontrada = datos.find((entrada) => entrada.id === this.id);
    if (entradaEncontrada) {
      this.precio = entradaEncontrada.precio;
      this.stock_actual = entradaEncontrada.stock_actual;
      this.tipo_entrada = entradaEncontrada.tipo_entrada;
    } else {
      console.log(`Entrada con id ${this.id} no encontrada en los datos.`);
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsCount = new BehaviorSubject<number>(0);
  cartItemsCount$ = this.cartItemsCount.asObservable();

  constructor(private http: HttpClient) {}

  getCurrentCount(): number {
    return this.cartItemsCount.value;
  }

  updateCartCount(count: number) {
    this.cartItemsCount.next(count);
  }

  // Método para obtener los datos del archivo JSON
  obtenerDatosEntradas(): Observable<any> {
    return this.http.get<any>('http://apidirectus.duckdns.org/items/entrada');
  }

  // Método para agregar una entrada al carrito
  agregarAlCarrito(id: string, nombre: string, dia: string): void {
    const currentCount = this.getCurrentCount();
    this.updateCartCount(currentCount + 1);

    // Crear un nuevo objeto Entrada
    const entrada = new Entrada(id, nombre);

    // Obtener los datos del JSON y completar la entrada
    this.obtenerDatosEntradas().subscribe((datos) => {
      entrada.completarDatos(datos);

      // Obtener el carrito actual desde localStorage
      let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

      // Agregar la entrada completa al carrito
      carrito.push(entrada);

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito));

      console.log('Producto agregado al carrito:', entrada);
    });
  }
}
