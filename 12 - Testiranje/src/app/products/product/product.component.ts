import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductModel } from "./product.model";

import { I_PRODUCT_SERVICE, IProductService } from "../shared/iproduct.service";

@Component({
    selector: 'product',
    templateUrl: './product.component.html'
})
export class ProductComponent {

    product: ProductModel;

    constructor(
        private route: ActivatedRoute,
        @Inject(I_PRODUCT_SERVICE) private productService: IProductService,
    ) { }

    ngOnInit(): void {

        this.route.params.subscribe(
            params => {
                this.getProduct(params["id"]);
            }
        );
    }

    getProduct(id: number){

        this.productService.getProduct(id).subscribe(
            value => {
                this.product = value;
            },
            error => {
                this.product = null;
                console.log(error);
            }
        );
    }
}