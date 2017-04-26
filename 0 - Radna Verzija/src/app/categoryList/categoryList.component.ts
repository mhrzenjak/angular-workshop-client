import { Component } from '@angular/core';
import { CategoryListModel } from "./categoryList.model";

@Component({
  selector: 'category-list',
  templateUrl: './categoryList.component.html'
})
export class CategoryListComponent{
    categoryList: Array<CategoryListModel> = [
        {text: "Rock", path: "rock"},
        {text: "Punk", path: "punk"},
        {text: "Pop", path: "pop"},
        {text: "Techno", path: "techno"},
        {text: "House", path: "house"},
        {text: "Klasična glazba", path: "classical"},
        {text: "Ostalo", path: "other"}
    ];
}