import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ProductModel } from "../products/product/product.model";
import { ProductSummaryModel } from "../products/product-summary/product-summary.model";

import { IProductService } from "../products/shared/iproduct.service";

@Injectable()
export class ProductMockService implements IProductService {

    getProductURL: string = 'api/product/';

    constructor(private http: Http) { }

    getProduct(id: number): Observable<ProductModel> {

        return this.http.get(this.getProductURL + id)
            .map(response => response.json().data as ProductModel);
    }

    getBestSelling(): Observable<Array<ProductSummaryModel>>{

        throw Observable.throw(new Error("Not implemented."));
    }
}