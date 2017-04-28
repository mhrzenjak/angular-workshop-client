import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductSummaryModel } from "../../products/product-summary/product-summary.model";
import { CategoryService } from "../shared/category.service";

@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CategoryComponent {
    id: number;
    name: string;
    productList: Array<ProductSummaryModel>;

    constructor(
        private route: ActivatedRoute,
        private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                this.name = params["id"];
                this.id = params["id"];
                this.getCategory(this.id);
            }
        );
    }

    getCategory(id: number) {
        this.categoryService.getCategory(this.id).subscribe(
            value => {
                this.productList = value;
            },
            error => {
                this.productList = null;
                console.log(error);
            }
        );
    }

}