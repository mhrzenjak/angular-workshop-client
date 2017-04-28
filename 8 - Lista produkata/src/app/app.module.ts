import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { ProductSummaryComponent } from "./products/product-summary/product-summary.component";

import { CategoryService } from "./categories/shared/category.service";

import { InMemoryDataService } from './testing/in-memory-data.service';
import { CategoryMockService } from "./testing/category-mock.service";

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'category/:id',
        component: CategoryComponent
      }
    ])
  ],
  providers: [{ provide: CategoryService, useClass: CategoryMockService }],
  declarations: [AppComponent, CategoryListComponent, CategoryComponent, ProductSummaryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
