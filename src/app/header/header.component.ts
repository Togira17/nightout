import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
// Importación del servicio del carrito
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  // Variable para saber si el header debe estar fijo
  isFixed = false;
  // Variable para controlar si el bloque superior debe desaparecer
  isTopBlockHidden = false;
  headerInitialOffset = 0;

  //Variable para realizar la cuenta de productos
  cartCount = 0; // Inicializamos en 0
  
  title = 'nightout';

  // Variable para controlar la visibilidad del inicio
  showInicio: boolean = false;

  constructor(private router: Router, private cartService: CartService) {}

  cerrarSesion(): void {
    alert('Sesión cerrada');
  }

  ngOnInit(): void {
    // Inicializamos la constante con el valor de la posición del header y la altura del bloque superior (100vh)
    const header = document.querySelector('.header') as HTMLElement;
    
    // Suponemos que el bloque superior tiene una altura de 100vh
    const topBlockHeight = window.innerHeight;  // Esto captura el valor de 100vh (alto de la ventana)

    // Calcular el desplazamiento total (posición de inicio del header + altura del bloque superior)
    this.headerInitialOffset = header.offsetTop + topBlockHeight;

    this.updateShowInicio(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Verifica si la nueva URL es '/'
        this.updateShowInicio(event.url);
      }
    });



    /**------------------------------------------------------------------------- */
    //Lógica para el contador del carrito

    // Suscríbete a los cambios del contador
    this.cartService.cartItemsCount$.subscribe((count) => {
      this.cartCount = count;
    });

  }

  @HostListener('window:scroll', [])
  // Función que se ejecuta cada vez que se hace scroll
  onWindowScroll() {
    const scrollPosition = window.scrollY; 
    this.isFixed = scrollPosition > this.headerInitialOffset; 


    if (this.isFixed && !this.isTopBlockHidden) {
      this.isTopBlockHidden = true;
    }
  }

  // Método para actualizar la variable 'showInicio'
  private updateShowInicio(url: string) {
    // 'showInicio' solo será true cuando la ruta sea '/'
    this.showInicio = url === '/';
  }
}
