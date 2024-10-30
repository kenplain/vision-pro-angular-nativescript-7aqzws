import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  template: `
    <section id="contact-form" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Get Your Free Quote</h2>
          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" formControlName="name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" formControlName="phone"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" formControlName="address"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Message</label>
              <textarea formControlName="message" rows="4"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
            </div>
            <button type="submit" [disabled]="!form.valid"
              class="w-full bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-colors disabled:opacity-50">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      // Add your form submission logic here
      this.form.reset();
      alert('Thank you! We will contact you shortly.');
    }
  }
}