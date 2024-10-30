import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-green-50">
      <!-- Header -->
      <header class="bg-green-800 text-white shadow-lg">
        <div class="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 class="text-2xl md:text-3xl font-bold">Ashland Tree Service</h1>
          <a href="tel:+17065555555" class="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-semibold transition-colors">
            📞 (706) 555-5555
          </a>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="bg-green-700 text-white py-12 md:py-24">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl">
            <h2 class="text-3xl md:text-5xl font-bold mb-6">Emergency Tree Removal in Augusta, GA</h2>
            <p class="text-xl mb-8">Hurricane damage? Fallen trees? We're here to help 24/7.</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="tel:+17065555555" class="bg-white text-green-800 text-lg font-bold px-8 py-3 rounded-full text-center hover:bg-gray-100 transition-colors">
                Call Now
              </a>
              <button (click)="scrollToForm()" class="bg-green-600 text-white text-lg font-bold px-8 py-3 rounded-full text-center hover:bg-green-500 transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Services -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Our Emergency Services</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-4">Emergency Tree Removal</h3>
              <p>24/7 response for fallen or dangerous trees after storm damage.</p>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-4">Storm Damage Cleanup</h3>
              <p>Professional cleanup of debris and damaged trees from your property.</p>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-xl font-bold mb-4">Risk Assessment</h3>
              <p>Expert evaluation of potentially dangerous trees on your property.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section id="contact-form" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-8">Get Your Free Quote</h2>
            <form (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" [(ngModel)]="formData.name" name="name" required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" [(ngModel)]="formData.phone" name="phone" required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" [(ngModel)]="formData.address" name="address" required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Message</label>
                <textarea [(ngModel)]="formData.message" name="message" rows="4"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"></textarea>
              </div>
              <button type="submit"
                class="w-full bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-green-800 text-white py-8">
        <div class="container mx-auto px-4 text-center">
          <p class="mb-4">Ashland Tree Service - Augusta, GA</p>
          <p>Available 24/7 for Emergency Service</p>
          <a href="tel:+17065555555" class="block mt-4 text-xl font-bold hover:text-green-300">(706) 555-5555</a>
        </div>
      </footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  formData = {
    name: '',
    phone: '',
    address: '',
    message: ''
  };

  scrollToForm() {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Here you would typically send the form data to your backend
    alert('Thank you! We will contact you shortly.');
    this.formData = {
      name: '',
      phone: '',
      address: '',
      message: ''
    };
  }
}