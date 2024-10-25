import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // Define a model for type safety if desired

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/products'; // Replace with your backend URL if needed

  constructor(private http: HttpClient) { }

  // Get all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getAll`);
  }

  // Get a product by ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/get/${id}`);
  }

  // Get products by category
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/get/all/${category}`);
  }

  // Get products by name (search by name)
  getProductsByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/get/${name}`);
  }

  // Add a new product
  addProduct(product: { productName: string; price: number; category: string }, imageFile: File): Observable<Product> {
    const formData = new FormData();
    formData.append('productName', product.productName);
    formData.append('price', product.price.toString());
    formData.append('category', product.category);
    formData.append('imageFile', imageFile);

    return this.http.post<Product>(`${this.apiUrl}/add`, formData);
  }

  // Edit an existing product
  editProduct(id: number, product: { productName: string; price: number; category: string }, imageFile: File): Observable<Product> {
    const formData = new FormData();
    formData.append('productName', product.productName);
    formData.append('price', product.price.toString());
    formData.append('category', product.category);
    formData.append('imageFile', imageFile);

    return this.http.put<Product>(`${this.apiUrl}/edit/${id}`, formData);
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}

export interface Product {
  id: number;
  productName: string;
  price: number;
  category: string;
  productImageLink: string;
}

