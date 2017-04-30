import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CategoryListModel } from "./category-list.model";

import { CategoryService } from "../shared/category.service";

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html'
})
export class CategoryListComponent {

    categoryList: Array<CategoryListModel>;

    constructor(
        private categoryService: CategoryService,
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