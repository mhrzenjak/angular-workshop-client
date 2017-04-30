import { Component } from '@angular/core';
import { CategoryListModel } from "./category-list.model";

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent {

  categoryList: Array<CategoryListModel> = [
    { id: 1, name: "Rock" },
    { id: 2, name: "Punk" },
    { id: 3, name: "Pop" },
    { id: 4, name: "Techno" },
    { id: 5, name: "House" },
    { id: 6, name: "Klasična glazba" },
    { id: 7, name: "Ostalo" }
  ];
}