import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryComponent } from './categories/category/category.component';

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([
      {
        path: 'category/:id',
        component: CategoryComponent
      }
    ])
  ],
  declarations: [AppComponent, CategoryListComponent, CategoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
