import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-green-800 text-white shadow-lg">
      <div class="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 class="text-2xl md:text-3xl font-bold">Ashland Tree Service</h1>
        <a href="tel:+17065550123" class="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-semibold transition-colors">
          📞 (706) 555-0123
        </a>
      </div>
    </header>
  `
})
export class HeaderComponent {}