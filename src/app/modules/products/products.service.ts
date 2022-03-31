import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string;

  constructor(

    private http: HttpClient,

  ) {
    this.baseUrl = environment.apiEndpoint;
  }

  getProducts() {
    return this.http.get(`${this.baseUrl}/ZowJKVKzJc7R/data`)
      .pipe(
        map((response) => response as Array<Product>),
      );
  }
}
