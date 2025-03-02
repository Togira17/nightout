import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DiscotecasService } from '../services/discotecas.service';

interface Entrada {
  tipo_entrada: string;
  precio: string;
  id_entrada:number;
  stock_actual: number;
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
  stock_entrada:number=0;
  stock_reservado:number=0;

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
    this.id_entrada = entrada ? entrada.id_entrada : 0;
    this.stock_entrada =entrada ? entrada.stock_actual :0; 
    
    const reservado = diaSeleccionado.entradas.find((e) => e.tipo_entrada === 'reservado');
    this.reservados = reservado ? reservado.precio : 'no disponible';
    this.id_reservado = reservado ? reservado.id_entrada : 0;  // Asignamos el ID de la entrada reservada
    this.stock_reservado = entrada ? entrada.stock_actual :0;

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

 

  agregarProductoAlCarrito(id: number, nombre: string, precio: string, tipo_entrada: string,stock_entrada:number): void {
    // Buscar la discoteca asociada según el tipo de entrada
    let discoteca: DiscotecaModel | undefined;
  
    if (tipo_entrada.toLowerCase() === 'individual') {
      discoteca = this.discotecas.find(d => d.id_entrada === id);
      if (!discoteca) {
        alert('Discoteca no encontrada para entrada individual');
        return;
      }
      if (discoteca.stock_entrada <= 0) {
        alert('Stock insuficiente para entrada individual');
        return;
      }
    } else if (tipo_entrada.toLowerCase() === 'reservado') {
      discoteca = this.discotecas.find(d => d.id_reservado === id);
      if (!discoteca) {
        alert('Discoteca no encontrada para reservado');
        return;
      }
      if (discoteca.stock_reservado <= 0) {
        alert('Stock insuficiente para reservado');
        return;
      }
      // Verificar que aún no se haya agregado un 'reservado' para esta discoteca
      const carrito = this.cartService.obtenerCarrito();
      const existeReservado = carrito.some(
        (item: any) =>
          item.tipo_entrada.toLowerCase() === 'reservado' && item.id === id
      );
      if (existeReservado) {
        alert('Solo se permite un reservado por discoteca');
        return;
      }
    }
  
    // Si todas las validaciones pasan, se agrega al carrito
    this.cartService.agregarAlCarrito(id, nombre, precio, tipo_entrada,stock_entrada);
  }
  
}
