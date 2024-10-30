import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
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
  `
})
export class ServicesComponent {}