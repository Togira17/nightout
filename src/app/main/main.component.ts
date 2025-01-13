import { Component } from '@angular/core';
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private cartService: CartService) {}

  addToCart() {
    // Simulamos agregar un producto incrementando el contador
    const currentCount = this.cartService.getCurrentCount();
    this.cartService.updateCartCount(currentCount + 1);
  }

}