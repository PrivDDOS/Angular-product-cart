import { CommonModule } from '@angular/common';
import { Component, signal, ChangeDetectorRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Angular-product-cart');

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {}

  products: [] = [];

  ngOnInit(): void {
    this.http.get('/data.json').subscribe(res => {
      console.log(res)
      this.cdr.detectChanges()
    })
  }
}
