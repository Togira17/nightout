import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

declare var bootstrap: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
publicKey: string = "MdEGfO8nqJO-digJf";
serviceId: string = "contact_service"; 
correoEmpresa: string = "nightoutsevilla@gmail.com";

public enviarMail(e: Event) {
  e.preventDefault();

  // Extraer datos del formulario manualmente
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const user_name = formData.get("user_name") as string;
  const user_email = formData.get("user_email") as string;
  const message = formData.get("message") as string;

  // Email a la empresa
  const emailEmpresa = {
    to_email: this.correoEmpresa, // Email de la empresa
    from_email: user_email,
    subject: "Nuevo mensaje del formulario de contacto",
    message: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${user_name}</p>
      <p><strong>Correo:</strong> ${user_email}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="color: blue;">${message}</p>
      <hr>
      <p style="font-size: 12px; color: red;">Este es un mensaje automático.</p>
    `
  };

  // Email de confirmación para el cliente
  const emailCliente = {
    to_email: user_email,
    from_email: this.correoEmpresa,
    subject: "Hemos recibido tu mensaje",
    message: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">
        <h2 style="color: #5f3fc3; margin-bottom: 10px;">Hola ${user_name},</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
      </td>
    </tr>
    <tr>
      <td>
        <table width="100%" cellpadding="10" cellspacing="0" border="0" style="background-color: #f9f9f9; border-left: 4px solid #5f3fc3; margin: 15px 0;">
          <tr>
            <td style="color: #555; font-style: italic;">"${message}"</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <p>Si necesitas más información, no dudes en responder a este correo.</p>
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
  </table>
</div>
  `
  };

  // Enviar correo a la empresa
  emailjs.send(this.serviceId, "contact_form", emailEmpresa, this.publicKey)
    .then(() => {
      console.log("Correo enviado a la empresa.");

      // Enviar correo de confirmación al cliente
      return emailjs.send(this.serviceId, "contact_form", emailCliente, this.publicKey);
    })
    .then(() => {
      this.abrirModalConCierre('agradecerContacto');
      console.log("Correo de confirmación enviado al cliente.");
      //alert("Mensaje enviado correctamente.");
      form.reset();
    })
    .catch(error => {
      console.error("Error al enviar el correo:", error);
      //alert("Hubo un error al enviar el mensaje. Inténtalo más tarde.");
    });
}

abrirModalConCierre(modalId: string) {
  const modalElement = document.getElementById(modalId);
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // Cerrar la modal y redirigir tras 3 segundos
    /* setTimeout(() => {
      modal.hide();
      window.location.href = '/'; // Redirige a la página principal
    }, 3000); */
  } else {
    console.error(`No se encontró la modal con ID: ${modalId}`);
  }
}

}


