import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MedicineSearchComponent } from './medicine-search/medicine-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MedicineSearchComponent],
  template: `
    <main>
      <app-medicine-search></app-medicine-search>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'medicine-search-frontend';
}