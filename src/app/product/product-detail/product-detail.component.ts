import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id: string | null = "";
  product!: Product;
  sub$?: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get("productId");
    //console.log("Product Id :", this.id);
    // router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe((event) => {
    //     console.log('prev:', (event as NavigationEnd).url);
    //     //this.previousUrl = event.url;
    //   });
  }

  ngOnInit(): void {
    this.sub$ = this.productService.getProductById(Number(this.id)).subscribe(
      (data) => {
        //console.log(data);
        this.product = data!;
      },
      (err) => { console.error(err) },
      () => { console.log("Product Completed") }
    )
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }
}
