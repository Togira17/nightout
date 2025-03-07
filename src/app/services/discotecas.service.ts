import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
interface DiaSemana {
  id_dia: number;
  nombre_dia: string;
  id_entrada:string;
}

interface Discoteca {
  id_discoteca: number;
  nombre: string;
  direccion: string;
  ambiente: string;
  descripcion: string;
  etiqueta: string;
  guardarropa: number;
  id_zona: number;
  imagen1: string;
  imagen2: string;
  imagen3: string;
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

interface Horario {
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

interface DiaCompleto extends DiaSemana {
  entradas: Entrada[];
  horarios: Horario[];
}

@Injectable({
  providedIn: 'root'
})
export class DiscotecasService {

  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  getDiscotecasCompletos(filters: any = {}): Observable<any[]> {


    

    let params = new HttpParams();
    
    // Agregar filtros dinámicamente
    Object.keys(filters).forEach(key => {
      params = params.set(key, filters[key]);
    });

    return forkJoin({
      dias: this.http.get<{data: DiaSemana[]}>(`${this.apiUrl}/items/dias_semana`).pipe(map(res => res.data)),


      discotecas: this.http.get<{data: Discoteca[]}>(`${this.apiUrl}/items/discoteca`, { params }).pipe(map(res => res.data)),


      entradas: this.http.get<{data: Entrada[]}>(`${this.apiUrl}/items/entrada?limit=-1`).pipe(map(res => res.data)),


      horarios: this.http.get<{data: Horario[]}>(`${this.apiUrl}/items/horarios_discoteca`).pipe(map(res => res.data)),


      zonas: this.http.get<{data: Zona[]}>(`${this.apiUrl}/items/zona`).pipe(map(res => res.data)),


    }).pipe(
      map(({dias, discotecas, entradas, horarios, zonas}) => {
        if (!Array.isArray(discotecas)) {
          throw new Error('Formato de discotecas inválido');
        }

        return discotecas.map(discoteca => {
          const zona = zonas.find(z => z.id_zona === discoteca.id_zona) || { id_zona: 0, nombre: 'Desconocida' };
          
          const diasConInfo: DiaCompleto[] = dias.map(dia => {
            const diaEntradas = entradas.filter(e => 
              e.id_discoteca === discoteca.id_discoteca &&
              e.dia_semana_id === dia.id_dia
            );

            const diaHorarios = horarios.filter(h => 
              h.discoteca_id === discoteca.id_discoteca &&
              h.dia_id === dia.id_dia
            );

            return { ...dia, entradas: diaEntradas, horarios: diaHorarios };
          }).filter(d => d.entradas.length > 0 || d.horarios.length > 0);
          
          return {
            ...discoteca,
            zona,
            dias: diasConInfo
          };
          
        });
      })
    );
  }
}