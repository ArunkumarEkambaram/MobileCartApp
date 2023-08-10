import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: Product[] = [];

  constructor(private http: HttpClient) {
    // this.products = [
    //   { id: 1001, productName: 'Samsung M34', price: 25000.994, rating: 4.5, addedDate: new Date(2023, 1, 12) },
    //   { id: 1002, productName: 'iPhone 12 Pro', price: 99000, rating: 4.8695555, addedDate: new Date("06/08/2022") },
    //   { id: 1003, productName: 'Xiaomi 12 Pro', price: 49000, rating: 4.269, addedDate: new Date("12/23/2022") },
    //   { id: 1004, productName: 'iPhone 14 Pro', price: 125000, rating: 4.881, addedDate: new Date("05/06/2022") },
    //   { id: 1005, productName: 'realme Note Pro', price: 33000, rating: 3.956, addedDate: new Date("06/06/2022") },
    //   { id: 1006, productName: 'oneplus 11', price: 39000, rating: 4, addedDate: new Date("12/05/2023") },
    // ]
  }

  getAllProducts(): Observable<Product[]> {
    // return this.products;
    return this.http.get<Product[]>("dataSource/product.json");
  }
}
