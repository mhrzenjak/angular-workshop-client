import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CategoryListModel } from "../categories/category-list/category-list.model";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const categoryList: Array<CategoryListModel> = [
            { id: 1, text: "Rock" },
            { id: 2, text: "Punk" },
            { id: 3, text: "Pop" },
            { id: 4, text: "Techno" },
            { id: 5, text: "House" },
            { id: 6, text: "Klasična glazba" },
            { id: 7, text: "Ostalo" },
			{ id: 8, text: "Najprodavanije" }
        ];
		return { 
            categories: categoryList
          };
    }
}