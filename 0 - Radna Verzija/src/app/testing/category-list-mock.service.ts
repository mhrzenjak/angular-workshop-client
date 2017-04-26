import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CategoryListModel } from "../category-list/category-list.model";
import { CategoryListService } from "../category-list/category-list.service";

@Injectable()
export class CategoryListMockService implements CategoryListService {
    getCategoriesURL: string = 'api/categories';

    constructor(private http: Http){}

    getCategories(): Observable<Array<CategoryListModel>>{
        return this.http.get(this.getCategoriesURL)
        .map(response => response.json().data as Array<CategoryListModel>);
    }
}