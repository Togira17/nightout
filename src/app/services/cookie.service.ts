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
    document.cookie = `${nombre}=${valor}; path=/; ${fechaExpiracion}`;
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
    this.setCookie('cookiesAceptadas', 'true', 30);  // Guarda la preferencia por 30 días
  }

  rechazarCookies() {
    this.setCookie('cookiesAceptadas', 'false', 30);  // Guarda el rechazo
  }

  cookiesAceptadas(): boolean {
    const valor = this.getCookie('cookiesAceptadas');
    return valor === 'true';  // Solo devuelve `true` si está aceptada
  }

  cookiesRechazadas(): boolean {
    const valor = this.getCookie('cookiesAceptadas');
    return valor === 'false';  // Devuelve `true` si el usuario las rechazó
  }
}
