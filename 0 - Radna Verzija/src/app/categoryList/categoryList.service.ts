import { Injectable } from '@angular/core';
import { CategoryListModel } from "./categoryList.model";

@Injectable()
export class CategoryListService {

    getCategories(): Array<CategoryListModel>{
        var categoryList: Array<CategoryListModel> = [
            {text: "Rock", path: "rock"},
            {text: "Punk", path: "punk"},
            {text: "Pop", path: "pop"},
            {text: "Techno", path: "techno"},
            {text: "House", path: "house"},
            {text: "Klasična glazba", path: "classical"},
            {text: "Ostalo", path: "other"}
        ];
        return categoryList;
    }
}