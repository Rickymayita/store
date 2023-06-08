import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ApiURL = 'http://localhost:3000/products'  //Url del servidor/api
  constructor( private http: HttpClient) { }

  getProducts():Observable<Product[]>{ // Observable parecido a promesas
    return this.http.get<Product[]>(this.ApiURL) // nos devuelve un array de products usando la interface Product
  }
}
