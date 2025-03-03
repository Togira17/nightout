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
    to_email: "nightousevilla@gmail.com", // Email de la empresa
    from_email: "user_name",
    subject: "Nuevo mensaje del formulario de contacto",
    message: `
      Nombre: ${user_name}
      Correo: ${user_email}
      Mensaje: ${message}
    `
  };

  // Email de confirmación para el cliente
  const emailCliente = {
    to_email: user_email,
    from_email: "nightousevilla@gmail.com",
    subject: "Hemos recibido tu mensaje",
    message: `
      Hola ${user_name},
      
      Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.

      Tu mensaje:
      "${message}"

      Saludos,
      El equipo de Nightoutsevilla
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
