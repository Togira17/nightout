import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Zona {
  id_zona: number;
  nombre: string;
}

interface ApiResponse{
  data: Zona[];
}

@Injectable({
  providedIn: 'root'
})

export class ZonaService {
  private apiUrl = 'http://apidirectus.duckdns.org/items/zona'; // URL de tu API

  constructor(private http: HttpClient) {}

  obtenerZonas(): Observable<Zona[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }
}
