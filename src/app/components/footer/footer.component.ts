import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-green-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="mb-4">Ashland Tree Service - Augusta, GA</p>
        <p>Available 24/7 for Emergency Service</p>
        <a href="tel:+17065550123" class="block mt-4 text-xl font-bold hover:text-green-300">(706) 555-0123</a>
      </div>
    </footer>
  `
})
export class FooterComponent {}