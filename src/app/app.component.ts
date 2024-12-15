import { Component } from '@angular/core';

//Añadidio por Juan
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nightout';

  //Añadido por Juan
  showInicio: boolean = false;

  //Añadido por Juan
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showInicio = this.router.url === '/';
    });
  }
}
