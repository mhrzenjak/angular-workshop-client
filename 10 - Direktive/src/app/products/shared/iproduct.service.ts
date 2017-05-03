import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductModel } from "../product/product.model";

export let I_PRODUCT_SERVICE = new InjectionToken<IProductService>('iproduct.service');
export interface IProductService {

    getProduct(id: number): Observable<ProductModel>;
}