import { Component, ChangeDetectorRef } from '@angular/core';
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
      "dni": '', //la longitud debe ser <= 9
      "first_name": '',
      "last_name": '',
    };


  credentials =
    {
      "email": '',
      "password": ''
    };

  registerErrorMessage: string = '';
  loginErrorMessage: string = '';

  constructor(private authService: AuthServiceService, private cdRef: ChangeDetectorRef) { }


  register(regForm: any) {
    this.registerErrorMessage = '';

    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);

        //limpiar campos del formulario
        this.user = {
          "email": '',
          "password": '',
          "nombre_usuario": '',
          "titular_tarjeta": '',
          "numero_tarjeta_credito": '',
          "cvc": '',
          "dni": '',
          "first_name": '',
          "last_name": '',
        };

        //Resetear validación
        regForm.resetForm();

        //Limpiar mensajes de error
        this.registerErrorMessage = '';

        //Cerrar Modal
        this.closeModal("registro");
      },
      error: (error) => {
        console.error('Error en el registro:', error);

        // Verificar si es un error 400 con "RECORD_NOT_UNIQUE"
        if (error.status === 400 && error.error?.errors) {
          const uniqueError = error.error.errors.find((err: any) => err.extensions?.code === "RECORD_NOT_UNIQUE");
          if (uniqueError) {
            this.registerErrorMessage = "Este email ya está registrado. Intenta con otro.";
          }
        } else {
          this.registerErrorMessage = "Ocurrió un error al registrarse. Intenta de nuevo.";
        }
      }
    });
  }

  login(logForm: any) {
    this.loginErrorMessage = ''; // Limpiar errores previos

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        
        this.handleLoginSuccess(response);
        //Limpiar formulario
        this.credentials =
        {
          "email": '',
          "password": ''
        };

        //Resetear validaciones
        logForm.resetForm();

        //Limpiar mensajes de error
        this.loginErrorMessage = '';
        
        //Cerrar la modal
        this.closeModal("login")
      },
      error: (error) => {
        console.error('Error en el login:', error);

        if (error.status === 401 && error.error?.errors) {
          const credentialError = error.error.errors.find((err: any) => err.extensions?.code === "INVALID_CREDENTIALS");

          if (credentialError) {
            this.loginErrorMessage = "Email o contraseña incorrectos. Inténtalo de nuevo.";
            console.log("Mensaje de error asignado:", this.loginErrorMessage);
          }
        }

        if (!this.loginErrorMessage) {
          this.loginErrorMessage = "Ocurrió un error al iniciar sesión. Intenta más tarde.";
        }

        console.log("Mensaje final de error:", this.loginErrorMessage);
        this.cdRef.detectChanges();
      }
    });
  }


  //Función para cerrar las ventanas modales
  closeModal(modalId: string) {
    const closeButton = document.querySelector(`#${modalId} .btn-close`) as HTMLElement;
    if (closeButton) {
      closeButton.click();
    }
  }

  //Función para guardar el token de acceso en localstorage
  handleLoginSuccess(response: any) {
    if (response.data && response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
      console.log('Token guardado en localStorage:', response.data.access_token);
    } else {
      console.error('Error: No se encontró el access_token en la respuesta de la API');
    }
  }

}
