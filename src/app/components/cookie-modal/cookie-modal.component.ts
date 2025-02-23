import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookie-modal',
  templateUrl: './cookie-modal.component.html',
  styleUrls: ['./cookie-modal.component.scss']
})
export class CookieModalComponent implements OnInit {

  showModal: boolean = false;

  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    if (!this.cookieService.cookiesAceptadas() && !this.cookieService.cookiesRechazadas()) {
      this.showModal = true;  // Mostrar modal si no ha tomado una decisión
    }
  }

  aceptarCookies() {
    this.cookieService.aceptarCookies();
    this.showModal = false;
    console.log("✅ Usuario aceptó las cookies"); // Debug
    this.router.navigate(['/']);
  }

  rechazarCookies() {
    this.cookieService.rechazarCookies();
    this.showModal = false;
    console.log("❌ Usuario rechazó las cookies"); // Debug
    this.router.navigate(['/avisoLegal']); // Redirige a la página de cookies
  }
}
