import { Component, Input } from '@angular/core';

import { ProductSummaryModel } from "./product-summary.model";

@Component({
  selector: 'product-summary',
  templateUrl: './product-summary.component.html'
})
export class ProductSummaryComponent{
    @Input() productSummary: ProductSummaryModel;
}