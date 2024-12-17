import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  // Variable para saber si el header debe estar fijo
  isFixed = false;
  headerInitialOffset = 0;
  cerrarSesion(): void {
    alert('Sesión cerrada');
  
  }
  ngOnInit(): void {
    // Inicializamos la constante con el valor de la posición del header
    const header = document.querySelector('.header') as HTMLElement;
    this.headerInitialOffset = header.offsetTop; // Almacenamos la posición inicial
  }

  @HostListener('window:scroll', [])
  // Función que se ejecuta cada vez que se hace scroll
  onWindowScroll() {
    const scrollPosition = window.scrollY; // Obtenemos la posición del scroll
    this.isFixed = scrollPosition > this.headerInitialOffset; // Cambiamos el estado de 'isFixed'
  }

  
}