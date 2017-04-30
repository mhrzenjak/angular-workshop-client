import { Component, OnInit } from '@angular/core';

import { CategoryModel } from "./category.model";

@Component({
  selector: 'category',
  templateUrl: './category.component.html'
})
export class CategoryComponent{
    category: CategoryModel;
	
	ngOnInit(): void{
		this.category = new CategoryModel();
		this.category.id = 0;
		this.category.name = "Odaberite kategoriju";
	}
}