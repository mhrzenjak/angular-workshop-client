import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CategoryListModel } from "./category-list.model";

@Injectable()
export class CategoryListService {

    getCategories(): Observable<Array<CategoryListModel>>{
        var categoryList: Array<CategoryListModel> = [
            {text: "Rock", path: "rock"},
            {text: "Punk", path: "punk"},
            {text: "Pop", path: "pop"},
            {text: "Techno", path: "techno"},
            {text: "House", path: "house"},
            {text: "Klasična glazba", path: "classical"},
            {text: "Ostalo", path: "other"}
        ];
        return Observable.of(categoryList);
    }
}