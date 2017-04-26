import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListService } from "./category-list/category-list.service";

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([
      {
        path: 'category/:name',
        component: CategoryComponent
      }
    ])
  ],
  providers: [CategoryListService],
  declarations: [AppComponent, CategoryListComponent, CategoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
