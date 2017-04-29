import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

import { ProductSummaryModel } from "./product-summary.model";

@Component({
  selector: 'product-summary',
  templateUrl: './product-summary.component.html'
})
export class ProductSummaryComponent {
  @Input() productSummary: ProductSummaryModel;

  constructor(
    private router: Router
  ) { }

  goToProductDetail(): void {
    this.router.navigate(['/product', this.productSummary.id]);
  }
}