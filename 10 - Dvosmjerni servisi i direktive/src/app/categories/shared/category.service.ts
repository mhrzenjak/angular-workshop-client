import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/observable/of';

import { CategoryListModel } from "../category-list/category-list.model";
import { ProductSummaryModel } from "../../products/product-summary/product-summary.model";

@Injectable()
export class CategoryService {
    currentCategoryName: Subject<string>;
    currentCategoryNameChanged: Observable<string>;

    getCategories(): Observable<Array<CategoryListModel>>{
        var categoryList: Array<CategoryListModel> = [
            { id: 1, text: "Rock" },
            { id: 2, text: "Punk" },
            { id: 3, text: "Pop" },
            { id: 4, text: "Techno" },
            { id: 5, text: "House" },
            { id: 6, text: "Klasična glazba" },
            { id: 7, text: "Ostalo" }
        ];
        return Observable.of(categoryList);
    }

    getCategory(id: number): Observable<Array<ProductSummaryModel>>{
        return null;
    }

    setCurrentCategoryName(name: string){}
}