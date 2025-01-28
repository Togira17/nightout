import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

// Declaramos la interfaz Discoteca en el mismo archivo
interface Discoteca {
  id_discoteca: number;
  nombre: string;
  zona: string;
  direccion: string;
  entrada: number;
  reservados: number;
  horario_apertura: string;
  horario_cierre: string;
  ambiente: string;
  etiqueta: string;
  terraza: boolean;
  parking: boolean;
  guardarropa: boolean;
  descripcion: string;
  imagen1: string;
  imagen2: string;
  imagen3: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  // Definimos el array de discotecas usando la interfaz
  discotecas: Discoteca[] = [{
    id_discoteca: 1,
    nombre: "Rosso",
    zona: "Cartuja",
    direccion: "C. Matemáticos Rey Pastor y Castro, 41092 Sevilla",
    entrada: 20,
    reservados: 160,
    horario_apertura: "22:00",
    horario_cierre: "05:00",
    ambiente: "+18 Público variado",
    etiqueta: "Prohibido usar zapatillas de deporte. Se recomienda asistir en polo o camisa.",
    terraza: true,
    parking: true,
    guardarropa: true,
    descripcion: "Situado sobre los pilares del antiguo Pabellón Olímpico en la pasada exposición del 92, este espacio cuenta con 2500 metros cuadrados y un gran equipo tecnológico y musical, consiguiendo así ser todo un referente del mundo de la diversión nocturna en la capital hispalense.",
    imagen1: "../../assets/img/discoteca1.webp",
    imagen2: "../../assets/img/discoteca2.webp",
    imagen3: "../../assets/img/discoteca3.webp"
  }];

  constructor(private cartService: CartService) {}

  addToCart() {
    // Simulamos agregar un producto incrementando el contador
    const currentCount = this.cartService.getCurrentCount();
    this.cartService.updateCartCount(currentCount + 1);
  }
}
