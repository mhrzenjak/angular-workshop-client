import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { CategoryListModel } from "../category-list/category-list.model";

import { CategoryModel } from "../category/category.model";

import { ICategoryService } from "./icategory.service";

@Injectable()
export class CategoryService implements ICategoryService {

    getCategoriesURL: string = 'api/categories';
    getCategoryURL: string = 'api/category/';

    selectedCategorySubject: Subject<number> = new Subject<number>();

    selectedCategoryChanged: Observable<number> = this.selectedCategorySubject.asObservable();

    constructor(private http: Http){}

    getCategories(): Observable<Array<CategoryListModel>>{
        return this.http.get(this.getCategoriesURL)
        .map(response => response.json().data as Array<CategoryListModel>);
    }

    getCategory(id: number): Observable<CategoryModel>{

        return this.http.get(this.getCategoryURL + id)
        .map(response => response.json().data as CategoryModel);
    }

    selectCategory(id: number){

        this.selectedCategorySubject.next(id);
    }
}