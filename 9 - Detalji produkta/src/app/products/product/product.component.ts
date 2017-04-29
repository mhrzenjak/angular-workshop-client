import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductModel } from "./product.model";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    id: number;
    product: ProductModel;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
        ) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                this.id = params["id"];
                this.getProduct(this.id);
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