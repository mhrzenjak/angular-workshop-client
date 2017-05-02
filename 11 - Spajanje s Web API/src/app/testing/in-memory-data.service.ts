import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CategoryListModel } from "../categories/category-list/category-list.model";
import { CategoryModel } from "../categories/category/category.model";
import { ProductSummaryModel } from "../products/product-summary/product-summary.model";
import { ProductModel } from "../products/product/product.model";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const productRockList: Array<ProductModel> = [
            { id: 1, name: "La Grange - ZZ Top", description: "Jedna od najpoznatijih ZZ Top pjesama. Svrstana u top 100 gitarskih pjesama svih vremena.", price: 4.25, albumName: "Tres Hombres", duration: 231 },
            { id: 2, name: "Comfortably numb - Pink Floyd", description: "Jedna od najpoznatijih Pink Floyd pjesama. Svrstana u top 500 pjesama svih vremena.", price: 3.76, albumName: "The Wall", duration: 383 },
            { id: 3, name: "I'm Gonna Be (500 Miles) - The Proclaimers", description: "Izvorna keltska rock pjesma.", price: 4.44, albumName: "Sunshine on Leith", duration: 217 },
        ];

        const productClassicalList: Array<ProductModel> = [
            { id: 4, name: "Dance of the Knights - Prokofiev", description: "Klasik.", price: 1.23, albumName: "Top 100 Classics", duration: 347 },
            { id: 5, name: "Claire de Lune - Claude Debussy", description: "Klasik.", price: 2.34, albumName: "Top 100 Classics", duration: 303 },
            { id: 6, name: "O Fortuna - Carl Orff", description: "Klasik.", price: 3.34, albumName: "Top 100 Classics", duration: 322 },
            { id: 7, name: "Ride of the Valkyries - Richard Wagner", description: "Klasik.", price: 3.44, albumName: "Top 100 Classics", duration: 301 },
        ];

        const categoryList: Array<CategoryModel> = [
            { id: 1, name: "Rock", productList: productRockList as Array<ProductSummaryModel> },
            { id: 2, name: "Punk", productList: null },
            { id: 3, name: "Pop", productList: null },
            { id: 4, name: "Techno", productList: null },
            { id: 5, name: "House", productList: null },
            { id: 6, name: "Klasična glazba", productList: productClassicalList as Array<ProductSummaryModel> },
            { id: 7, name: "Ostalo", productList: null },
            { id: 8, name: "Najprodavanije", productList: null }
        ];

        return {
            categories: categoryList as Array<CategoryListModel>,
            category: categoryList,
            product: productRockList.concat(productClassicalList)
        };
    }
}