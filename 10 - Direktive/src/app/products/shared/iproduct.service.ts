import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProductModel } from "../product/product.model";

export interface IProductService {

    getProduct(id: number): Observable<ProductModel>;
}

export let I_PRODUCT_SERVICE = new InjectionToken<IProductService>('iproduct.service');