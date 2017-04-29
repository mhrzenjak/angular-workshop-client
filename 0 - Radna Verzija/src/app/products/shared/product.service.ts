import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ProductModel } from "../product/product.model";

@Injectable()
export class ProductService {

    getProduct(id: number): Observable<ProductModel> {
        return null;
    }
}