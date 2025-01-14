import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsCount = new BehaviorSubject<number>(0); //Inicializa el contador a 0
  
  cartItemsCount$ = this.cartItemsCount.asObservable(); // Exponemos el observable

  constructor() { }

  //Método para obtener el valor actual
  getCurrentCount(): number {
    return this.cartItemsCount.value;
  }

  // Método para actualizar el contador
  updateCartCount (count: number) {
    this.cartItemsCount.next(count);
  }
}
