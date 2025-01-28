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
  },
  {
    id_discoteca: 2,
    nombre: "Monasterio",
    zona: "Centro",
    direccion: "C. Amor de Dios, 18, Casco Antiguo, 41002 Sevilla",
    entrada: 15,
    reservados: 100,
    horario_apertura: "22:00",
    horario_cierre: "04:00",
    ambiente: "+18, especializada en encuentros ERASMUS",
    etiqueta: "No",
    terraza: false,
    parking: false,
    guardarropa: true,
    descripcion: "El Monasterio Sevilla es una renombrada discoteca ubicada en pleno corazón de Sevilla, en la calle C. Amor de Dios, 18. Con una amplia oferta de servicios y una atención de primera calidad, esta discoteca ofrece una experiencia nocturna inigualable.",
    imagen1: "../../assets/img/discoteca4.webp",
    imagen2: "../../assets/img/discoteca5.webp",
    imagen3: "../../assets/img/discoteca6.webp"
  },
  {
    id_discoteca: 3,
    nombre: "Holid_discoteca",
    zona: "Centro",
    direccion: "Jesús del Gran Poder, 73, Casco Antiguo, 41002 Sevilla",
    entrada: 18,
    reservados: 120,
    horario_apertura: "23:00",
    horario_cierre: "05:00",
    ambiente: "+18 Público variado",
    etiqueta: "No",
    terraza: false,
    parking: false,
    guardarropa: true,
    descripcion: "Cuenta con más de 350 asientos, pantallas audiovisuales, escenario, 2 pistas de baile, zonas VIPs, dos barras y totalmente climatizado.",
    imagen1: "../../assets/img/discoteca7.webp",
    imagen2: "../../assets/img/discoteca8.webp",
    imagen3: "../../assets/img/discoteca9.webp"
  },
  {
    id_discoteca: 4,
    nombre: "Koko",
    zona: "Centro",
    direccion: "Pl. de la Encarnación, 38, Casco Antiguo, 41003 Sevilla",
    entrada: 22,
    reservados: 140,
    horario_apertura: "22:30",
    horario_cierre: "06:00",
    ambiente: "+18 Público joven",
    etiqueta: "Prohibido ir en zapatillas de deporte. Se recomienda ir en polo o camisa.",
    terraza: false,
    parking: false,
    guardarropa: true,
    descripcion: "Donde la ciudad despierta cuando el sol se oculta. Desde las enérgicas noches de reggaetón hasta los pulsantes ritmos de la electrónica, cada día es una nueva oportunidad para sumergirse en la esencia de la vida nocturna de Sevilla.",
    imagen1: "../../assets/img/discoteca1.webp",
    imagen2: "../../assets/img/discoteca2.webp",
    imagen3: "../../assets/img/discoteca3.webp"
  },
  {
    id_discoteca: 5,
    nombre: "Gran Vía",
    zona: "Triana-Los Remedios",
    direccion: "Av. Blas Infante, 6, 41011 Sevilla",
    entrada: 16,
    reservados: 120,
    horario_apertura: "23:00",
    horario_cierre: "06:00",
    ambiente: "+18 Público joven",
    etiqueta: "Obligatorio polo o camisa",
    terraza: false,
    parking: true,
    guardarropa: true,
    descripcion: "Una digna sucesora de las emblemáticas terrazas.",
    imagen1: "../../assets/img/discoteca4.webp",
    imagen2: "../../assets/img/discoteca5.webp",
    imagen3: "../../assets/img/discoteca6.webp"
  },
  {
    id_discoteca: 6,
    nombre: "Terraza Alfonso",
    zona: "Parque María Luisa",
    direccion: "P.º de las Delicias, 13, 41013 Sevilla",
    entrada: 14,
    reservados: 100,
    horario_apertura: "22:00",
    horario_cierre: "03:00",
    ambiente: "+18 Público Joven",
    etiqueta: "Polo o camisa y náuticos",
    terraza: true,
    parking: true,
    guardarropa: false,
    descripcion: "La Terraza Alfonso es una de las más famosas de Sevilla en su temporada de verano.",
    imagen1: "../../assets/img/discoteca7.webp",
    imagen2: "../../assets/img/discoteca8.webp",
    imagen3: "../../assets/img/discoteca9.webp"
  }];

  constructor(private cartService: CartService) {}

  addToCart() {
    // Simulamos agregar un producto incrementando el contador
    const currentCount = this.cartService.getCurrentCount();
    this.cartService.updateCartCount(currentCount + 1);
  }
}
