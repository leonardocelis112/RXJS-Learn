import { catchError } from 'rxjs/operators';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import { EMPTY, Observable, of, Subscription } from 'rxjs';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnDestroy {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  products$ = this.productService.productsWithCategory$;
  sub: Subscription;

  constructor(private productService: ProductService) {}

  ngOnDestroy(): void {}

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
