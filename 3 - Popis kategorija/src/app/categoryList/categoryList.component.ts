import { Component } from '@angular/core';
import { CategoryListModel } from "./categoryList.model";

@Component({
  selector: 'category-list',
  templateUrl: './categoryList.component.html'
})
export class CategoryListComponent{
categoryList: Array<CategoryListModel> = [
        {text: "Rock", path: "category/rock"},
        {text: "Punk", path: "category/punk"},
        {text: "Pop", path: "category/pop"},
        {text: "Techno", path: "category/techno"},
        {text: "House", path: "category/house"},
        {text: "Klasična glazba", path: "category/classical"},
        {text: "Ostalo", path: "category/other"}
    ];
}