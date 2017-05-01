import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";

import { CategoryListModel } from "./category-list.model";

import { ICategoryService, I_CATEGORY_SERVICE } from "../shared/icategory.service";

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html'
})
export class CategoryListComponent {

    categoryList: Array<CategoryListModel>;

    constructor(
        @Inject(I_CATEGORY_SERVICE) private categoryService: ICategoryService,
        private router: Router
    ) { }

    private doesCategoryExist(id: number): boolean {
        return this.categoryList.find(x => x.id == id) !== undefined;
    }

    ngOnInit(): void {

        this.categoryService.getCategories().subscribe(
            value => {
                this.categoryList = value;
            },
            error => {
                console.log(error);
            });

        this.categoryService.selectedCategoryChanged.subscribe(
            value => {
                if (this.doesCategoryExist(value)) {
                    this.router.navigate(['/category', value]);
                }
            },
            error => {
                console.log(error);
            });
    }
}