import { Component, OnInit } from '@angular/core';

import { CategoryListModel } from "./category-list.model";

import { CategoryService } from "../shared/category.service";

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent{

    categoryList: Array<CategoryListModel>;

    constructor(private categoryService: CategoryService){}

    ngOnInit(): void{

        this.categoryList = this.categoryService.getCategories();
    }
}