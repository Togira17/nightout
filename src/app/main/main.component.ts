import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DiscotecasService } from '../services/discotecas.service';

interface Discoteca {
  id_discoteca: number;
  nombre: string;
  zona: string;
  direccion: string;
  entrada: number; // Precio de la entrada
  fecha: string[];
  fechaSeleccionada?: string;
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
  diasDisponibles?: string[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  discotecas: Discoteca[] = []; // Lista de discotecas
  dias: { id: number; nombre: string }[] = []; // Lista de días disponibles
  diaSeleccionado: number = 1; // Día seleccionado por defecto (Lunes)

  constructor(
    private cartService: CartService,
    private discotecasService: DiscotecasService
  ) {}

  ngOnInit() {
    this.loadDias(); // Cargar los días de la semana
    this.loadDiscotecas(); // Cargar las discotecas para el día seleccionado
  }

  // Cargar los días de la semana
  private loadDias() {
    this.discotecasService.getDiasSemana().subscribe(dias => {
      this.dias = dias.map(d => ({ id: d.id_dia, nombre: d.nombre_dia }));
    });
  }

  // Cargar las discotecas para el día seleccionado
  private loadDiscotecas() {
    this.discotecasService.getDiscotecasCompletas(this.diaSeleccionado)
      .subscribe({
        next: (data) => {
          this.discotecas = data.map(d => this.mapToComponentFormat(d));
        },
        error: (err) => console.error('Error cargando discotecas:', err)
      });
  }

  // Mapear los datos del servicio al formato del componente
  private mapToComponentFormat(d: any): Discoteca {
    return {
      id_discoteca: d.id_discoteca,
      nombre: d.nombre,
      zona: d.zona?.nombre || 'Sin zona',
      direccion: d.direccion,
      entrada: d.entrada ? parseFloat(d.entrada.precio) : 0, // Precio de la entrada
      fecha: d.diasDisponibles || [],
      reservados: d.entrada?.stock_actual || 0,
      horario_apertura: d.horario?.hora_apertura || '22:00',
      horario_cierre: d.horario?.hora_cierre || '06:00',
      ambiente: d.ambiente,
      etiqueta: d.etiqueta,
      terraza: !!d.terraza,
      parking: !!d.parking,
      guardarropa: !!d.guardarropa,
      descripcion: d.descripcion,
      imagen1: d.imagen1,
      imagen2: d.imagen2,
      imagen3: d.imagen3,
      diasDisponibles: d.diasDisponibles
    };
  }

  // Cambiar el día seleccionado
  cambiarDia(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.diaSeleccionado = parseInt(select.value); // Actualizar el día seleccionado
    this.loadDiscotecas(); // Recargar las discotecas con los datos del nuevo día
  }

  // Añadir al carrito
  addToCart() {
    const currentCount = this.cartService.getCurrentCount();
    this.cartService.updateCartCount(currentCount + 1);
  }
}