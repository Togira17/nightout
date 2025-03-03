import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
publicKey: string = "MdEGfO8nqJO-digJf";
serviceId: string = "contact_service"; 
correoEmpresa: string = "nighoutsevilla@gmail.com";

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
    from_email: "user_name",
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
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #0056b3;">Hola ${user_name},</h2>
      
      <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.</p>

      <blockquote style="border-left: 4px solid #0056b3; padding-left: 10px; color: #555; font-style: italic;">
        "${message}"
      </blockquote>

      <p>Si necesitas más información, no dudes en responder a este correo.</p>

      <hr style="border: none; border-top: 1px solid #ccc;">

      <p style="font-size: 14px; color: #666;">
        Saludos,<br>
        <strong>El equipo de Nightoutsevilla</strong>
      </p>
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
      console.log("Correo de confirmación enviado al cliente.");
      alert("Mensaje enviado correctamente.");
      form.reset();
    })
    .catch(error => {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el mensaje. Inténtalo más tarde.");
    });
}
}


