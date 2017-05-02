import { Component, OnInit, Inject } from "@angular/core";

import { ProductSummaryModel } from "../products/product-summary/product-summary.model";

import { I_PRODUCT_SERVICE, IProductService } from "../products/shared/iproduct.service";

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

	topSellingProducts: Array<ProductSummaryModel>;

	constructor( @Inject(I_PRODUCT_SERVICE) private productService: IProductService) { }

	ngOnInit(): void {

		this.productService.getBestSelling().subscribe(
			value =>{
				this.topSellingProducts = value;
			},
			error =>{
				console.log(error);
			}
		)
	}
}