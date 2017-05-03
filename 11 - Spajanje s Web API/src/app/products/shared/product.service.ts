import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ProductModel } from "../product/product.model";
import { ProductSummaryModel } from "../product-summary/product-summary.model";

import { IProductService } from "./iproduct.service";

@Injectable()
export class ProductService implements IProductService {

    productsBaseURL = "http://localhost:63286/";
    getProductURL: string = this.productsBaseURL + "api/products/get-product-details/";
    getBestSellingURL: string = this.productsBaseURL + "api/products/get-bestselling"

    constructor(private http: Http) { }

    getProduct(id: number): Observable<ProductModel> {

        return this.http.get(this.getProductURL + id)
            .map(response => response.json().data as ProductModel);
    }

    getBestSelling(): Observable<Array<ProductSummaryModel>>{

        return this.http.get(this.getBestSellingURL)
            .map(response => response.json() as Array<ProductSummaryModel>);
    }
}