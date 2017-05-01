import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CategoryModel } from "./category.model";

@Component({
	selector: 'category',
	templateUrl: './category.component.html'
})
export class CategoryComponent {

	category: CategoryModel;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.category = new CategoryModel();
		this.route.params.subscribe(
			params => {
				this.category.id = params["id"];
				this.category.name = "Placeholder";
			}
		);
	}
}