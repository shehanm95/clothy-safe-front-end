import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../../product/product-card/product-card.component";
import { Product, ProductService } from '../../service/product.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, AsyncPipe, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productsList$!: Observable<Product[]>; // Observable for async pipe
  errorMessage: string | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsList$ = this.productService.getAllProducts();
  }
}