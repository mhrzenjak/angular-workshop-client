import { Injectable } from '@angular/core';
import { CategoryListModel } from "../category-list/category-list.model";

@Injectable()
export class CategoryService {
    getCategories(): Array<CategoryListModel> {
        var categoryList: Array<CategoryListModel> = [
            { id: 1, text: "Rock" },
            { id: 2, text: "Punk" },
            { id: 3, text: "Pop" },
            { id: 4, text: "Techno" },
            { id: 5, text: "House" },
            { id: 6, text: "Klasična glazba" },
            { id: 7, text: "Ostalo" }
        ];

        return categoryList;
    }

}