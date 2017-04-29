import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { CategoryListModel } from "../categories/category-list/category-list.model";
import { CategoryService } from "../categories/shared/category.service";
import { ProductSummaryModel } from "../products/product-summary/product-summary.model";

@Injectable()
export class CategoryMockService implements CategoryService {
    currentCategoryName: Subject<string> = new Subject<string>();
    currentCategoryNameChanged: Observable<string> = this.currentCategoryName.asObservable();

    getCategoriesURL: string = 'api/categories';
    getCategoryURL: string = 'api/category/';

    constructor(private http: Http){}

    getCategories(): Observable<Array<CategoryListModel>>{
        return this.http.get(this.getCategoriesURL)
        .map(response => response.json().data as Array<CategoryListModel>);
    }

    getCategory(id: number): Observable<Array<ProductSummaryModel>>{
        return this.http.get(this.getCategoryURL + id)
        .map(response => response.json().data.productList as Array<ProductSummaryModel>);
    }

    setCurrentCategoryName(name: string){
        this.currentCategoryName.next(name);
    }
}