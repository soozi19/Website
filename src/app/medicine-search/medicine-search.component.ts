import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-medicine-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './medicine-search.component.html',
  styleUrls: ['./medicine-search.component.css']
})
export class MedicineSearchComponent implements OnInit {
  searchTerm = '';
  medicines: any[] = [];
  isLoading = false;
  private searchTerms = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        this.isLoading = true;
        return this.http.get<any[]>(`http://localhost:3000/api/medicines?search=${term}`);
      })
    ).subscribe({
      next: (results) => {
        this.medicines = results;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error searching medicines:', error);
        this.isLoading = false;
      }
    });
  }

  searchMedicines(): void {
    if (this.searchTerm.trim()) {
      this.searchTerms.next(this.searchTerm.trim());
    } else {
      this.medicines = [];
    }
  }
}

