import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent  {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitForm() {
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };
    
    emailjs.send('default_service', 'template_portfolio', formData, 'nTjpfQxMI0EZkVIS1')
      .then(() => {
        this.isSubmitting = false;
        this.successMessage = 'Message sent successfully!';
        this.contactForm.reset();
      })
      .catch((error) => {
        this.isSubmitting = false;
        this.errorMessage = 'Failed to send the message. Please try again.';
        console.error('Email sending error:', error);
      });

    setTimeout(() => {
      this.isSubmitting = false;
      this.successMessage = 'Message sent successfully!';
      this.contactForm.reset();
    }, 2000);
  }

  
}