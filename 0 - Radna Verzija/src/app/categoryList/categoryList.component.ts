import { Component, OnInit } from '@angular/core';
import { CategoryListModel } from "./categoryList.model";
import { CategoryListService } from "./categoryList.service";

@Component({
  selector: 'category-list',
  templateUrl: './categoryList.component.html'
})
export class CategoryListComponent{
    categoryList: Array<CategoryListModel>;

    constructor(private categoryListService: CategoryListService){}

    ngOnInit(): void{
        this.categoryList = this.categoryListService.getCategories();
    }
}