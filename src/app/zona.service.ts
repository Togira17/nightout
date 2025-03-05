import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../environments/environment';
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
  //private apiUrl = 'http://apidirectus.duckdns.org/items/zona'; 
  private apiUrl = environment.apiUrl; 


  constructor(private http: HttpClient) {}

  obtenerZonas(): Observable<Zona[]> {
    //return this.http.get<ApiResponse>(this.apiUrl).pipe(
    return this.http.get<ApiResponse>(`${this.apiUrl}/items/zona`).pipe(
      map(response => response.data)
    );
  }
}
