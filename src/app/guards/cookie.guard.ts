import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class CookieGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(): boolean {
    if (this.cookieService.cookiesAceptadas()) {
      return true;  // Permite el acceso si el usuario aceptó las cookies
    } 
    
    if (this.cookieService.cookiesRechazadas()) {
      this.router.navigate(['/cookies']);  // Redirige si las rechazó
      return false;
    }

    this.router.navigate(['/cookies']);  // Redirige si no ha tomado una decisión
    return false;
  }
}
