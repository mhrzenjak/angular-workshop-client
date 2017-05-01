import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CategoryModel } from "./category.model";

import { CategoryService } from "../shared/category.service";

@Component({
	selector: 'category',
	templateUrl: './category.component.html'
})
export class CategoryComponent {

	category: CategoryModel;

	constructor(
		private route: ActivatedRoute,
		private categoryService: CategoryService
	) { }

	ngOnInit(): void {
		this.category = new CategoryModel();
		this.route.params.subscribe(
			params => {
				this.category = this.categoryService.getCategory(params["id"]);
			}
		);
	}
}