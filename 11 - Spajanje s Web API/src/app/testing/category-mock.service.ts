import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { CategoryListModel } from "../categories/category-list/category-list.model";
import { CategoryModel } from "../categories/category/category.model";

import { ICategoryService } from "../categories/shared/icategory.service";

@Injectable()
export class CategoryMockService implements ICategoryService {

    private selectedCategorySubject: Subject<number> = new Subject<number>();

    private getCategoriesURL: string = 'api/categories';
    private getCategoryURL: string = 'api/category/';

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