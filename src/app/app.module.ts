import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieModalComponent } from './components/cookie-modal/cookie-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    CarritoComponent,
    FiltrosComponent,
    AboutUsComponent,
    PoliticaPrivacidadComponent,
    ContactoComponent,
    AvisoLegalComponent,
    CookieModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
