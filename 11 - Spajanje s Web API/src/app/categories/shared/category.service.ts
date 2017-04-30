import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { CategoryListModel } from "../category-list/category-list.model";
import { ProductSummaryModel } from "../../products/product-summary/product-summary.model";

@Injectable()
export class CategoryService {
    currentCategoryName: Subject<string> = new Subject<string>();
    currentCategoryNameChanged: Observable<string> = this.currentCategoryName.asObservable();

    categoriesBaseURL: string = "http://localhost:63286/";
    getCategoriesURL: string = this.categoriesBaseURL +  "api/categories/get-all-categories";
    getCategoryURL: string = this.categoriesBaseURL +  "api/categories/get-products/";

    constructor(private http: Http){}

    getCategories(): Observable<Array<CategoryListModel>>{
        return this.http.get(this.getCategoriesURL)
        .map(response => response.json() as Array<CategoryListModel>);      
    }

    getCategory(id: number): Observable<Array<ProductSummaryModel>>{
        return this.http.get(this.getCategoryURL + id)
        .map(response => response.json() as Array<ProductSummaryModel>);
    }

    setCurrentCategoryName(name: string){
        this.currentCategoryName.next(name);
    }
}