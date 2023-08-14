import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: string | null = "";
  products?: Product[];

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) {
    this.id = this.activatedRoute.snapshot.paramMap.get("productId");
    //console.log("Product Id :", this.id);

  }
  ngOnInit(): void {
    console.log("Init Method Called");
    this.productService.getAllProducts().pipe(take(10)).subscribe(
      value => { this.products = value },
      error => { console.error("Error occurred while fetching data", error) },
      () => { console.log("Product Completed Reading") }
    )
  }
}
