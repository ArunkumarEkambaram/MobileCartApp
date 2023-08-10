import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  // providers: [ProductService]//DI
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  //productService?: ProductService;

  searchedProduct: string = "";

  // products: Product[] = [
  //   { id: 1001, productName: 'Samsung M34', price: 25000.994, rating: 4.5, addedDate: new Date(2023, 1, 12) },
  //   { id: 1002, productName: 'iPhone 12 Pro', price: 99000, rating: 4.8695555, addedDate: new Date("06/08/2022") },
  //   { id: 1003, productName: 'Xiaomi 12 Pro', price: 49000, rating: 4.269, addedDate: new Date("12/23/2022") },
  //   { id: 1004, productName: 'iPhone 14 Pro', price: 125000, rating: 4.881, addedDate: new Date("05/06/2022") },
  //   { id: 1005, productName: 'realme Note Pro', price: 33000, rating: 3.956, addedDate: new Date("06/06/2022") },
  //   { id: 1006, productName: 'oneplus 11', price: 39000, rating: 4, addedDate: new Date("12/05/2023") },
  // ]

  onSearchProduct(data: string) {
    this.searchedProduct = data;
    //console.log(this.searchedProduct);
  }

  //Construtor Injection
  constructor(private productService: ProductService) {
    console.log("Constructor Called");
  }

  //To Call ProductService
  ngOnInit(): void {
    console.log("Init Method Called");
    this.productService.getAllProducts().subscribe(
      value => { this.products = value },
      error => { console.error("Error occurred while fetching data", error) },
      () => { console.log("Product Completed Reading") }
    )
  }

}
