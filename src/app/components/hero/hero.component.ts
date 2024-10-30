import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="bg-green-700 text-white py-12 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl">
          <h2 class="text-3xl md:text-5xl font-bold mb-6">Emergency Tree Removal in Augusta, GA</h2>
          <p class="text-xl mb-8">Hurricane damage? Fallen trees? We're here to help 24/7.</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:+17065550123" class="bg-white text-green-800 text-lg font-bold px-8 py-3 rounded-full text-center hover:bg-gray-100 transition-colors">
              Call Now
            </a>
            <button (click)="scrollToForm()" class="bg-green-600 text-white text-lg font-bold px-8 py-3 rounded-full text-center hover:bg-green-500 transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  scrollToForm() {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  }
}