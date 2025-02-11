import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

interface DiaSemana {
  id_dia: number;
  nombre_dia: string;
}

interface Discoteca {
  ambiente: string;
  descripcion: string;
  direccion: string;
  etiqueta: string;
  guardarropa: number;
  id_discoteca: number;
  id_zona: number;
  imagen1: string;
  imagen2: string;
  imagen3: string;
  nombre: string;
  parking: number;
  reservado: number;
  stock_inicial: number;
  terraza: number;
}

interface Entrada {
  dia_semana_id: number;
  id_discoteca: number;
  id_entrada: number;
  precio: string;
  stock_actual: number;
  tipo_entrada: string;
}

interface HorarioDiscoteca {
  dia_id: number;
  discoteca_id: number;
  hora_apertura: string;
  hora_cierre: string;
  id_horario: number;
}

interface Zona {
  id_zona: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiscotecasService {

  constructor(private http: HttpClient) { }

  getDiscotecasCompletos(): Observable<any[]> {
    return forkJoin([
      this.http.get<DiaSemana[]>('/assets/data/json/dias_semana.json'),
      this.http.get<Discoteca[]>('/assets/data/json/discoteca.json'),
      this.http.get<Entrada[]>('/assets/data/json/entrada.json'),
      this.http.get<HorarioDiscoteca[]>('/assets/data/json/horarios_discoteca.json'),
      this.http.get<Zona[]>('/assets/data/json/zona.json'),
    ]).pipe(
      map(([productos, modelos]) => {
        return productos.map((producto: Producto) => ({
          ...producto,
          modelos: modelos.filter((modelo: Modelo) => modelo.productoId === producto.id),
        }));
      })
    );
  }
}

 
  getDiscotecasCompletas(diaId: number): Observable<any[]> {
    return forkJoin({
      discotecas: this.getDiscotecas(),
      entradas: this.getEntradas(),
      horarios: this.getHorarios(),
      dias: this.getDiasSemana(),
      zonas: this.getZonas()
    }).pipe(
      map(({ discotecas, entradas, horarios, dias, zonas }) => {
        return discotecas.map(discoteca => {
          const entrada = entradas.find(e => 
            e.id_discoteca === discoteca.id_discoteca && 
            e.dia_semana_id === diaId
          );
          
          const horario = horarios.find(h => 
            h.discoteca_id === discoteca.id_discoteca && 
            h.dia_id === diaId
          );
          
          const zona = zonas.find(z => z.id_zona === discoteca.id_zona);
          const diasDisponibles = this.getDiasDisponibles(discoteca.id_discoteca, entradas, dias);

          return {
            ...discoteca,
            entrada,
            horario,
            zona,
            diasDisponibles
          };
        }).filter(d => d.entrada); // Solo discotecas con entradas para el día seleccionado
      })
    );
  }

  private getDiasDisponibles(discotecaId: number, entradas: Entrada[], dias: DiaSemana[]): string[] {
    return entradas
      .filter(e => e.id_discoteca === discotecaId)
      .map(e => dias.find(d => d.id_dia === e.dia_semana_id)?.nombre_dia || '')
      .filter(Boolean);
  }
}