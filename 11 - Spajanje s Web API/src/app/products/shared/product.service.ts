import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { ProductModel } from "../product/product.model";

@Injectable()
export class ProductService {

    getProductURL: string = 'http://localhost:63286/api/products/GetProductDetails?productId=';

    constructor(private http: Http){}

    getProduct(id: number): Observable<ProductModel>{
        return this.http.get(this.getProductURL + id)
        .map(response => response.json() as ProductModel);
    }
}