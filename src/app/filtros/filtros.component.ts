import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ZonaService } from '../zona.service';

interface Zona {
  id_zona: number;
  nombre: string;
}

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})

export class FiltrosComponent implements OnInit {

  @Output() filtrosAplicados = new EventEmitter<any>();

  zonas: Zona[] = []; 

  filtros = {
    guardarropa: false,
    parking: false,
    id_zona: 0
  };
  constructor (private zonaService: ZonaService) {}

  ngOnInit(): void {
    this.cargarZonas();
  }


  cargarZonas(): void {
    this.zonaService.obtenerZonas().subscribe({
      next: (data) => {
        this.zonas = data;
      },
      error: (error) => {
        console.error('Error al obtener las zonas:', error);
      }
    });    
  }

  aplicarFiltros(): void {

    //console.log("Valores de filtros antes de aplicar:", this.filtros); // <-- Depuración

    const filtrosActivos: any = {};

    if (this.filtros.guardarropa) filtrosActivos['filter[guardarropa][_eq]'] = 1;
    if (this.filtros.parking) filtrosActivos['filter[parking][_eq]'] = 1;
    if (this.filtros.id_zona > 0) filtrosActivos['filter[id_zona][_eq]'] = this.filtros.id_zona;

    console.log("Filtros enviados a MainComponent:", filtrosActivos); // <-- Depuración

    this.filtrosAplicados.emit(filtrosActivos);
  }

}
