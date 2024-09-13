import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://localhost:8080/api/product'; 
  
  constructor(private http: HttpClient) { }

  findAll(): Observable<string>{
    return this.http.get<string>(`${this.url}/findAll`);
  }

  save(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}/save`, product);
  }

  deleteById(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  findById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
