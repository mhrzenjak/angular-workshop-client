import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { ProductSummaryComponent } from "./products/product-summary/product-summary.component";
import { ProductComponent } from "./products/product/product.component";

import { RotateOnHoverDirective } from "./shared/rotate-on-hover/rotate-on-hover.directive";

import { CategoryService } from "./categories/shared/category.service";
import { ProductService } from "./products/shared/product.service";

import { InMemoryDataService } from './testing/in-memory-data.service';
//import { CategoryMockService } from "./testing/category-mock.service";
//import { ProductMockService } from "./testing/product-mock.service";

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'category/:id',
        component: CategoryComponent
      },
      {
        path: 'product/:id',
        component: ProductComponent
      }
    ])
  ],
  providers: [
    { provide: CategoryService, useClass: CategoryService },
    { provide: ProductService, useClass: ProductService }
  ],
  declarations: [AppComponent, CategoryListComponent, CategoryComponent, ProductSummaryComponent, ProductComponent, RotateOnHoverDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }