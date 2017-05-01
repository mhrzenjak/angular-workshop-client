import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CategoryListModel } from "../categories/category-list/category-list.model";
import { CategoryModel } from "../categories/category/category.model";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const categoryList: Array<CategoryListModel> = [
            { id: 1, name: "Rock" },
            { id: 2, name: "Punk" },
            { id: 3, name: "Pop" },
            { id: 4, name: "Techno" },
            { id: 5, name: "House" },
            { id: 6, name: "Klasična glazba" },
            { id: 7, name: "Ostalo" },
            { id: 8, name: "Najprodavanije" }
        ];

        return {
            categories: categoryList,
            category: categoryList as Array<CategoryModel>
        };
    }
}