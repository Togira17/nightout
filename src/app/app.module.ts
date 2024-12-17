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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    CarritoComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
