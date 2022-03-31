import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  errorMessage: string;
  sortProducts: {fieldValue: string, orderBy: string};

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.error;
      },
    });
  }

  sort() {
    if(this.sortProducts.orderBy === 'asc') {
      this.products.sort((a, b) => parseFloat(String(a[this.sortProducts.fieldValue])) - parseFloat(String(b[this.sortProducts.fieldValue])));
    }

    if(this.sortProducts.orderBy === 'desc') {
      this.products.sort((a, b) => parseFloat(String(b[this.sortProducts.fieldValue])) - parseFloat(String(a[this.sortProducts.fieldValue])));
    }
  }
}
