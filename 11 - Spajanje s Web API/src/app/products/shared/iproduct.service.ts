import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductModel } from "../product/product.model";
import { ProductSummaryModel } from "../product-summary/product-summary.model";

export let I_PRODUCT_SERVICE = new InjectionToken<IProductService>('iproduct.service');
export interface IProductService {

    getProduct(id: number): Observable<ProductModel>;

    getBestSelling(): Observable<Array<ProductSummaryModel>>;
}