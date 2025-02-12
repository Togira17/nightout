import { Component } from '@angular/core';
import { AuthServiceService } from '../auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user =
    {
      "email": '', //Debe ser único
      "password": '',
      "nombre_usuario": '', //Debe ser único
      "titular_tarjeta": '',
      "numero_tarjeta_credito": '',
      "cvc": '',
      "dni": '12345678Y', //la longitud debe ser <= 9
      "first_name": '',
      "last_name": '',
    };


  credentials =
    {
      "email": '',
      "password": ''
    };

  constructor(private authService: AuthServiceService) { }


  register() {

    this.authService.register(this.user).subscribe({
      next: (response) => console.log('Registro exitoso', response),
      error: (err) => console.error('Error en el registro', err)
    });
  }

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => console.log('Login exitoso', response),
      error: (err) => console.error('Error en el login', err)
    });
  }


}
