import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ProductModel } from "../product/product.model";
import { IProductService } from "./iproduct.service";

@Injectable()
export class ProductService implements IProductService {

    getProductURL: string = 'api/product/';

    constructor(private http: Http) { }

    getProduct(id: number): Observable<ProductModel> {

        return this.http.get(this.getProductURL + id)
            .map(response => response.json().data as ProductModel);
    }
}