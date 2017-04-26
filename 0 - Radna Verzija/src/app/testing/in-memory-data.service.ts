import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CategoryListModel } from "../category-list/category-list.model";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const categoryList: Array<CategoryListModel> = [
            {text: "Rock", path: "rock"},
            {text: "Punk", path: "punk"},
            {text: "Pop", path: "pop"},
            {text: "Techno", path: "techno"},
            {text: "House", path: "house"},
            {text: "Klasična glazba", path: "classical"},
            {text: "Ostalo", path: "other"},
            {text: "Najprodavanije", path: "top"},
        ];
        return { 
            categories: categoryList
          };
    }
}