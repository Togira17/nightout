import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nightout';

  // Variable para controlar la visibilidad del inicio
  showInicio: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Verificar la URL actual y actualizar 'showInicio' cuando se cargue el componente
    this.updateShowInicio(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Verifica si la nueva URL es '/'
        this.updateShowInicio(event.url);
      }
    });
  }

  // Método para actualizar la variable 'showInicio'
  private updateShowInicio(url: string) {
    // 'showInicio' solo será true cuando la ruta sea '/'
    this.showInicio = url === '/';
  }
}


