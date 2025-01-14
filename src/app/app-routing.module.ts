import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'aboutUs', component:AboutUsComponent },
  { path: 'politicaPrivacidad', component:PoliticaPrivacidadComponent },
  { path: 'contacto', component:ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
