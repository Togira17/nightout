import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthServiceService } from '../auth.service.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  publicKey: string = "MdEGfO8nqJO-digJf";

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

        //Guardar datos antes de limpiar el formulario
        const userEmail = this.user.email;
        const userName = this.user.nombre_usuario;

        //Enviar el correo de bienvenida
        this.enviarCorreoBienvenida(userEmail, userName);

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
        this.closeModal("login");

        //Recargar la página:
        window.location.reload();

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
    const closeButton = document.querySelector(`#${modalId} .btn-danger`) as HTMLElement;
    if (closeButton) {
      closeButton.click();
    }
  }

  //Función para guardar el token de acceso en localstorage
  handleLoginSuccess(response: any) {
    if (response.data && response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    } else {
      console.error('Error: No se encontró el access_token en la respuesta de la API');
    }
  }

  enviarCorreoBienvenida(userEmail: string, userName: string) {


    const emailParams = {
      to_email: userEmail,
      subject: "¡Bienvenido a Nightoutsevilla!",
      message: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <h2 style="color: #5f3fc3; margin-bottom: 10px;">¡Hola ${userName}!</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p style="margin: 10px 0;">Gracias por registrarte en <strong>Nightoutsevilla</strong>.</p>
        <p>Ahora puedes acceder a todas nuestras ofertas y eventos exclusivos.</p>
        <p>¡Esperamos verte pronto!</p>
      </td>
    </tr>
    <tr>
      <td>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
      </td>
    </tr>
    <tr>
      <td align="center">
        <p style="font-size: 14px; color: black; margin: 0;">
          Saludos,<br>
          <strong>El equipo de Nightoutsevilla</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p style="font-size: 12px; color: gray; margin-top: 20px;">
          Este es un mensaje automático, por favor no respondas a este correo.
        </p>
      </td>
    </tr>
  </table>
</div>
`
    };

    emailjs.send("contact_service", "contact_form", emailParams, this.publicKey)
      .then(() => {
        console.log("Correo de bienvenida enviado con éxito a:", userEmail);
      })
      .catch(error => {
        console.error("Error al enviar el correo de bienvenida:", error);
      });
  }

}
