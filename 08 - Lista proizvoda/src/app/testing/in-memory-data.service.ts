import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CategoryListModel } from "../categories/category-list/category-list.model";
import { CategoryModel } from "../categories/category/category.model";
import { ProductSummaryModel } from "../products/product-summary/product-summary.model";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const productRockList: Array<ProductSummaryModel> = [
            { id: 1, name: "La Grange - ZZ Top", description: "Jedna od najpoznatijih ZZ Top pjesama. Svrstana u top 100 gitarskih pjesama svih vremena.", price: 4.25 },
            { id: 2, name: "Comfortably numb - Pink Floyd", description: "Jedna od najpoznatijih Pink Floyd pjesama. Svrstana u top 500 pjesama svih vremena.", price: 3.76 },
            { id: 3, name: "I'm Gonna Be (500 Miles) - The Proclaimers", description: "Izvorna keltska rock pjesma.", price: 4.44 },
        ];

        const productClassicalList: Array<ProductSummaryModel> = [
            { id: 4, name: "Dance of the Knights - Prokofiev", description: "Klasik.", price: 1.23 },
            { id: 5, name: "Claire de Lune - Claude Debussy", description: "Klasik.", price: 2.34 },
            { id: 6, name: "O Fortuna - Carl Orff", description: "Klasik.", price: 3.34 },
            { id: 7, name: "Ride of the Valkyries - Richard Wagner", description: "Klasik.", price: 3.44 },
        ];
		
        const categoryList: Array<CategoryModel> = [
            { id: 1, name: "Rock", productList: productRockList },
            { id: 2, name: "Punk", productList: null },
            { id: 3, name: "Pop", productList: null },
            { id: 4, name: "Techno", productList: null },
            { id: 5, name: "House", productList: null },
            { id: 6, name: "Klasična glazba", productList: productClassicalList },
            { id: 7, name: "Ostalo", productList: null },
            { id: 8, name: "Najprodavanije", productList: null }
        ];

        return {
            categories: categoryList as Array<CategoryListModel>,
            category: categoryList
        };
    }
}