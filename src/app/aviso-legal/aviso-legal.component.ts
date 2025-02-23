import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.scss']
})
export class AvisoLegalComponent implements OnInit {

  showModal: boolean = false;

  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    if (!this.cookieService.cookiesAceptadas() && !this.cookieService.cookiesRechazadas()) {
      this.showModal = true;  // Mostrar modal si no ha tomado una decisión
    }
  }

  // Método para mostrar el modal de cookies
  mostrarModalCookies() {
    this.showModal = true;
  }

  // Métodos para aceptar o rechazar cookies
  aceptarCookies() {
    this.cookieService.aceptarCookies();
    this.showModal = false;
    console.log("✅ Usuario aceptó las cookies");
    this.router.navigate(['/']);
  }

  rechazarCookies() {
    this.cookieService.rechazarCookies();
    this.showModal = false;
    console.log("❌ Usuario rechazó las cookies");
    this.router.navigate(['/avisoLegal']); // Redirige a la página de cookies si rechazan
  }
}
