import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookie-modal',
  templateUrl: './cookie-modal.component.html',
  styleUrls: ['./cookie-modal.component.scss']  // Usamos SCSS aquí
})
export class CookieModalComponent implements OnInit {

  showModal: boolean = false;

  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    // Verifica si el usuario ya aceptó las cookies
    if (!this.cookieService.cookiesAceptadas()) {
      this.showModal = true;  // Mostrar modal si no están aceptadas
    } else {
      this.router.navigate(['/']);  // Redirigir si ya aceptó
    }
  }

  aceptarCookies() {
    this.cookieService.aceptarCookies();
    this.showModal = false;  // Ocultar modal después de aceptar
    this.router.navigate(['/']);  // Redirigir a la página principal
  }
}
