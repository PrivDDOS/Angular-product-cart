import { CommonModule } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface ProductImages {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product {
  image: ProductImages;
  name: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Angular-product-cart');

  constructor(private http: HttpClient) {}

  products: Product[] = [];
  quantity: number = 0;

  ngOnInit(): void {
    this.http.get<Product[]>('/data.json').subscribe({
      next: (products) => {
        this.products = products;
        console.log(this.products)
      },
      error: (error) => {
        console.error('Failed to load products from /data.json', error);
      }
    })
  }
}
