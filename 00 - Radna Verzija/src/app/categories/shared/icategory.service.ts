import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { InjectionToken } from '@angular/core';

import { CategoryListModel } from "../category-list/category-list.model";
import { CategoryModel } from "../category/category.model";

export let I_CATEGORY_SERVICE = new InjectionToken<ICategoryService>('icategory.service');
export interface ICategoryService {

    getCategories(): Observable<Array<CategoryListModel>>;

    getCategory(id: number): Observable<CategoryModel>;

}