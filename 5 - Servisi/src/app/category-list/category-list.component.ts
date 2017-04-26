import { Component, OnInit } from '@angular/core';
import { CategoryListModel } from "./category-list.model";
import { CategoryListService } from "./category-list.service";

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent{
    categoryList: Array<CategoryListModel>;

    constructor(private categoryListService: CategoryListService){}

    ngOnInit(): void{
        this.categoryList = this.categoryListService.getCategories();
    }
}