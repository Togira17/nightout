import { AuthServiceService } from '../auth.service.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
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

  // Variable para realizar la cuenta de productos
  cartCount = 0; // Inicializamos en 0

  title = 'nightout';

  // Variables para el dropdown dinámico del usuario
  isLoggedIn: boolean = false;
  userName: string | null = null;

  // Variable para controlar la visibilidad del inicio
  showInicio: boolean = false;

  constructor(private router: Router, private cartService: CartService, private AuthServiceService: AuthServiceService) { }

  cerrarSesion(): void {
    alert('Sesión cerrada');
    this.AuthServiceService.logout();
    this.isLoggedIn = false;
    this.userName = null;
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

    this.checkAuthStatus();

    /**------------------------------------------------------------------------- */
    // Lógica para el contador del carrito
    // Suscríbete a los cambios del contador
    this.cartService.cartItemsCount$.subscribe((count) => {
      this.cartCount = count; // Actualiza la variable cartCount cada vez que cambia el contador
    });
  }

  @HostListener('window:scroll', [])
  // Función que se ejecuta cada vez que se hace scroll
  onWindowScroll() {

    if (this.router.url === '/') {
      const scrollPosition = window.scrollY;
      this.isFixed = scrollPosition > this.headerInitialOffset;

      if (this.isFixed && !this.isTopBlockHidden) {
        this.isTopBlockHidden = true;
      }
    }
  }

  // Método para actualizar la variable 'showInicio'
  private updateShowInicio(url: string) {
    // 'showInicio' solo será true cuando la ruta sea '/'
    this.showInicio = url === '/';
  }

  checkAuthStatus(): void {
    this.isLoggedIn = this.AuthServiceService.isAuthenticated();

    if (this.isLoggedIn) {
      this.AuthServiceService.getUserData().subscribe(
        (user) => {
          //console.log('Datos del usuario:', user); // Para verificar en consola
          this.userName = user.data?.nombre_usuario ?? 'Usuario';
          localStorage.setItem('usuario', JSON.stringify(user.data)); // Guardar solo `data`
        },
        (error) => {
          console.error('Error al obtener datos del usuario:', error);
          this.cerrarSesion(); // Si hay error, forzar logout
        }
      );
    }
  }
}
