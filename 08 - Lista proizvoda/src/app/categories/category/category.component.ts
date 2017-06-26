import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CategoryModel } from "./category.model";

import { ICategoryService, I_CATEGORY_SERVICE } from "../shared/icategory.service";

@Component({
	selector: 'category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent {

	category: CategoryModel;

	constructor(
		private route: ActivatedRoute,
		@Inject(I_CATEGORY_SERVICE) private categoryService: ICategoryService,
	) { }

	ngOnInit(): void {

		this.category = new CategoryModel();

		this.route.params.subscribe(
			params => {
				this.getCategory(params["id"]);
			}
		);
	}

	getCategory(id: number) {

		this.categoryService.getCategory(id).subscribe(
			value => {
				this.category = value;
			},
			error => {
				this.category = null;
				console.log(error);
			}
		);
	}

}