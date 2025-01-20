import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { environment } from '../../../environments/environment';

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = "";
  errorMessage = "";

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
    });
  }

  isFieldInvalid(fieldName: string) {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.touched || field.dirty) : false;
  }

  hasError(fieldName: string, errorType: string): boolean {
    const control = this.contactForm.get(fieldName);
    return control
      ? control.hasError(errorType) && (control.dirty || control.touched)
      : false;
  }

  sendEmail() {
      if (this.contactForm.valid) {
          this.isSubmitting = true;
          const formData = this.contactForm.value;

          emailjs.send (
              environment.emailJsServiceId,
              environment.emailJsTemplateId,
              {
                  name: formData.name,
                  email: formData.email,
                  message: formData.message
              },
              environment.emailJsUserId
          )
              .then((response: EmailJSResponseStatus) => {
                  this.successMessage = 'Your message has been sent!';
                  this.errorMessage = '';
                  this.contactForm.reset();

                  setTimeout(() => {
                        this.successMessage = '';
                  }, 500);
              }, (error) => {
                  this.errorMessage = 'An error occurred, please try again later.';
                  this.successMessage = '';
              })
              .finally(() => {
                  this.isSubmitting = false;
              });
      }
  }
}
