import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { CategoryListModel } from "../category-list/category-list.model";
import { CategoryModel } from "../category/category.model";

import { ICategoryService } from "./icategory.service";

@Injectable()
export class CategoryService implements ICategoryService {

    categoriesBaseURL: string = "http://localhost:63286/";
    getCategoriesURL: string = this.categoriesBaseURL +  "api/categories/get-all-categories";
    getCategoryURL: string = this.categoriesBaseURL +  "api/categories/get-category-details/";

    constructor(private http: Http){}

    getCategories(): Observable<Array<CategoryListModel>>{

        return this.http.get(this.getCategoriesURL)
        .map(response => response.json() as Array<CategoryListModel>);
    }

    getCategory(id: number): Observable<CategoryModel>{

        return this.http.get(this.getCategoryURL + id)
        .map(response => response.json() as CategoryModel);
    }
}