import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';  // Importa HttpClient
import { Observable } from 'rxjs';  // Para manejar las respuestas asíncronas

export class Entrada {
  id: number;
  nombre: string;
  precio: string;
  tipo_entrada:string;
  cantidad: number; // Nueva propiedad para cantidad

  constructor(id: number, nombre: string,precio:string,tipo_entrada:string) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.tipo_entrada=tipo_entrada
    this.cantidad = 1; // Inicializamos la cantidad por defecto
  }
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsCount = new BehaviorSubject<number>(0);  // El contador de productos en el carrito
  cartItemsCount$ = this.cartItemsCount.asObservable();  // Observable para que los componentes se suscriban

  constructor(private http: HttpClient) {
    // Al iniciar, revisamos el carrito en localStorage
    this.actualizarContadorDesdeStorage();
  }

  // Método para obtener el carrito actual desde localStorage
  obtenerCarrito(): any[] {
    return JSON.parse(localStorage.getItem('carrito') || '[]');
  }

  // Método para actualizar el contador de productos en el carrito
  actualizarContador() {
    const carrito = this.obtenerCarrito();
    this.cartItemsCount.next(carrito.length);  // Contamos cuántos productos hay en el carrito
  }

  // Método para agregar una entrada al carrito
  agregarAlCarrito(id: number, nombre: string, precio: string, tipo_entrada: string): void {
    const entrada = new Entrada(id, nombre, precio, tipo_entrada);
  
    // Obtener los datos del JSON y completar la entrada
    this.obtenerDatosEntradas().subscribe((datos) => {
  
      // Obtener el carrito actual desde localStorage
      let carrito = this.obtenerCarrito();
  
      // Buscar si el producto ya existe en el carrito
      const productoExistente = carrito.find((producto: Entrada) => producto.id === entrada.id);
  
      if (productoExistente) {
        // Si el producto ya existe, incrementamos su cantidad
        productoExistente.cantidad += 1;
      } else {
        // Si no existe, agregamos el producto al carrito
        carrito.push(entrada);
      }
  
      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito));
  
      // Actualizar el contador de productos en el carrito
      this.actualizarContador();
    });
  }

  // Método para eliminar un producto del carrito
  eliminarDelCarrito(id: number): void {
    let carrito = this.obtenerCarrito();
    carrito = carrito.filter((producto: Entrada) => producto.id !== id);  // Filtrar el producto por ID

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador de productos en el carrito
    this.actualizarContador();
  }

  // Método para actualizar el contador desde localStorage cuando se inicia la aplicación
  private actualizarContadorDesdeStorage(): void {
    const carrito = this.obtenerCarrito();
    this.cartItemsCount.next(carrito.length);  // Contamos los productos en el carrito
  }

  // Método para obtener los datos del archivo JSON
  obtenerDatosEntradas(): Observable<any> {
    return this.http.get<any>('http://apidirectus.duckdns.org/items/entrada');
  }
}
