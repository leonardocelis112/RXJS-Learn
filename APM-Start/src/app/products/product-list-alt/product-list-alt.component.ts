import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId: number;

  products$ = this.productService.products$;
  sub: Subscription;

  constructor(private productService: ProductService) {}

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
