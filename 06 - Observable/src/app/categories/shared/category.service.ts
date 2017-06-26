import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CategoryListModel } from "../category-list/category-list.model";

import { CategoryModel } from "../category/category.model";

@Injectable()
export class CategoryService {

    categoryList: Array<CategoryListModel> = [
        { id: 1, name: "Rock" },
        { id: 2, name: "Punk" },
        { id: 3, name: "Pop" },
        { id: 4, name: "Techno" },
        { id: 5, name: "House" },
        { id: 6, name: "Klasična glazba" },
        { id: 7, name: "Ostalo" }
    ];

    getCategories(): Observable<Array<CategoryListModel>>{

        return Observable.of(this.categoryList);
    }

    getCategory(id: number): Observable<CategoryModel>{

        return Observable.of(this.categoryList.find(x => x.id == id) as CategoryModel);
    }
}