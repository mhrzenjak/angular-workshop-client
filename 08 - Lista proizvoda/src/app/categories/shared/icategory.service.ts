import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { CategoryListModel } from "../category-list/category-list.model";
import { CategoryModel } from "../category/category.model";

export interface ICategoryService {

    selectedCategoryChanged: Observable<number>;

    getCategories(): Observable<Array<CategoryListModel>>;

    getCategory(id: number): Observable<CategoryModel>;

    selectCategory(id: number): void;
}

export let I_CATEGORY_SERVICE = new InjectionToken<ICategoryService>('icategory.service');