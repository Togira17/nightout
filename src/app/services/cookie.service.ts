import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() {}

  setCookie(nombre: string, valor: string, dias: number) {
    let fechaExpiracion = "";
    if (dias) {
      const fecha = new Date();
      fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
      fechaExpiracion = "; expires=" + fecha.toUTCString();
    }
    document.cookie = `${nombre}=${valor}; path=/ ${fechaExpiracion}`;
  }
  
  getCookie(nombre: string): string | null {
    const nombreEQ = nombre + "=";
    const cookies = document.cookie.split(';');
    for (let c of cookies) {
      c = c.trim();
      if (c.indexOf(nombreEQ) == 0) {
        return c.substring(nombreEQ.length);
      }
    }
    return null;
  }
  
  aceptarCookies() {
    this.setCookie('cookiesAceptadas', 'true', 30);  // Guardamos la preferencia por 30 días
  }
  
  cookiesAceptadas(): boolean {
    return this.getCookie('cookiesAceptadas') === 'true';
  }
}
