import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //inicializamos variables
  isFixed = false;
  headerInitialOffset = 0; 

  ngOnInit(): void {
    // inicializamos constantes
    const header = document.querySelector('.header') as HTMLElement;
    this.headerInitialOffset = header.offsetTop; 
  }

  @HostListener('window:scroll', [])
  //funcion se realiza al hacer scroll y calcula
  onWindowScroll() {
    const scrollPosition = window.scrollY
    this.isFixed = scrollPosition > this.headerInitialOffset;
  }
}