import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoryService } from "./categories/shared/category.service";

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([
      {
        path: 'category/:id',
        component: CategoryComponent
      }
    ])
  ],
  providers: [ CategoryService ],
  declarations: [AppComponent, CategoryListComponent, CategoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
