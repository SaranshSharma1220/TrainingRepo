import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { map, Observable } from 'rxjs';
import { CategoryAdapter } from '../adapters/category.adapter';
import { Category } from '../../shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient,private categoryAdapter : CategoryAdapter) {}

  APIURL = 'http://127.0.0.1:3000/';
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.APIURL}/products`).pipe(
      map((resData) => resData) 
    );
  }


  getGroupedCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.APIURL}/categories`).pipe(
      map(categories => {
        const parents = categories.filter(c => !c.parentId);
        parents.forEach(parent => {
          parent.children = categories.filter(c => c.parentId === parent.id);
        });
        return parents;
      })
    );
  }

  getCategories(){
    return this.http.get(`${this.APIURL}/categories`).pipe(
      map((categories)=>categories)
    );
  }
}
