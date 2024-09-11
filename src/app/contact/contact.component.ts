import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName: new FormControl('', [Validators.required]),
    senderEmail: new FormControl('', [Validators.required, Validators.email]),
    senderMessage: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  })

  emailValidity(senderEmail: any) {
    return senderEmail?.invalid && (senderEmail?.dirty || senderEmail?.touched)
  }

  submitForm() {
    console.log('~~~ value: ', this.contactForm.valid)
  }
}
