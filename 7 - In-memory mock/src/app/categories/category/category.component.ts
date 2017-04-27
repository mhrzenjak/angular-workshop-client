import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CategoryComponent {
    name: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                this.name = params["id"];
            }
        );
    }
}