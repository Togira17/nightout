import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import{ AvisoLegalComponent} from './aviso-legal/aviso-legal.component';
import { CookieModalComponent } from './components/cookie-modal/cookie-modal.component';
import { CookieGuard } from './guards/cookie.guard'; // Importa el guard



const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [CookieGuard] }, // Protegido
  { path: 'header', component: HeaderComponent, canActivate: [CookieGuard] },
  { path: 'footer', component: FooterComponent, canActivate: [CookieGuard] },
  { path: 'carrito', component: CarritoComponent, canActivate: [CookieGuard] },
  { path: 'aboutUs', component: AboutUsComponent, canActivate: [CookieGuard] },
  { path: 'politicaPrivacidad', component: PoliticaPrivacidadComponent, canActivate: [CookieGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate: [CookieGuard] },
  { path: 'cookies', component: CookieModalComponent }, // No se protege para que puedan aceptar cookies
  { path: 'avisoLegal', component: AvisoLegalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
