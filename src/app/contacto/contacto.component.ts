import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
publicKey: string = "MdEGfO8nqJO-digJf";

public enviarMail(e: Event) {
  e.preventDefault();

  emailjs
    .sendForm('contact_service', 'contact_form', e.target as HTMLFormElement, {
      publicKey: this.publicKey,
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
      },
    );
}
}
