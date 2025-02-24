import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DiscotecasService } from '../services/discotecas.service';

interface Entrada {
  tipo_entrada: string;
  precio: string;
  id_entrada:number;
}

interface Horario {
  hora_apertura: string;
  hora_cierre: string;
}

interface Dia {
  id_dia: number;
  nombre_dia: string;
  entradas: Entrada[];
  horarios: Horario[];
}

interface Zona {
  id_zona: number;
  nombre: string;
}

class DiscotecaModel {
  id_discoteca!: number;
  nombre!: string;
  direccion!: string;
  ambiente!: string;
  descripcion!: string;
  etiqueta!: string;
  guardarropa!: number;
  id_zona!: number;
  imagen1!: string;
  imagen2!: string;
  imagen3!: string;
  parking!: number;
  reservado!: number;
  stock_inicial!: number;
  terraza!: number;
  zona!: Zona;
  dias!: Dia[];

  fecha: string[] = [];
  entrada: string = 'no disponible';
  reservados: string = 'no disponible';
  id_entrada:number=0;
  id_reservado:number=0;

  horario_apertura: string = '--:--';
  horario_cierre: string = '--:--';
  fechaSeleccionada: string = '';

  constructor(data: any) {
    Object.assign(this, data);
    this.fecha = this.dias.map((d) => d.nombre_dia);
    this.fechaSeleccionada = this.fecha[0] || '';
    this.actualizarPreciosYHorarios();
  }

  actualizarPreciosYHorarios(): void {
    const diaSeleccionado = this.dias.find((d) => d.nombre_dia === this.fechaSeleccionada);
    if (!diaSeleccionado) return;

    const entrada = diaSeleccionado.entradas.find((e) => e.tipo_entrada === 'individual');
    this.entrada = entrada ? entrada.precio : 'no disponible';
    this.id_entrada = entrada ? entrada.id_entrada : 0;  // Asignamos el ID de la entrada individual
    
    const reservado = diaSeleccionado.entradas.find((e) => e.tipo_entrada === 'reservado');
    this.reservados = reservado ? reservado.precio : 'no disponible';
    this.id_reservado = reservado ? reservado.id_entrada : 0;  // Asignamos el ID de la entrada reservada

    const horario = diaSeleccionado.horarios[0];
    this.horario_apertura = horario?.hora_apertura?.substring(0, 5) || '--:--';
    this.horario_cierre = horario?.hora_cierre?.substring(0, 5) || '--:--';
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  discotecas: DiscotecaModel[] = [];


  constructor(
    private cartService: CartService,
    private discotecasService: DiscotecasService
  ) { }

  ngOnInit(): void {
    this.cargarDiscotecas();
  }

  cargarDiscotecas(filtros: any = {} ): void {
    this.discotecasService.getDiscotecasCompletos(filtros).subscribe({
      next: (data: any) => {
        if (Array.isArray(data)) {
          this.discotecas = data.map((item) => new DiscotecaModel(item));
        } else {
          console.error('Datos recibidos no son un array:', data);
          this.discotecas = [];
        }
      },
      error: (error) => {
        console.error('Error al cargar discotecas:', error);
        this.discotecas = [];
      }
    });
  }

  // Llamar a actualizarPreciosYHorarios cuando cambia la fecha seleccionada
  actualizarPreciosYHorarios(discoteca: DiscotecaModel): void {
    // Actualiza precios y horarios basados en la fecha seleccionada
    discoteca.actualizarPreciosYHorarios();
  }

 

  agregarProductoAlCarrito(id: number, nombre: string ,precio:string,tipo_entrada:string): void {
   this.cartService.agregarAlCarrito(id, nombre,precio,tipo_entrada);
  }
}
