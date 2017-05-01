import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductSummaryComponent } from "./products/product-summary/product-summary.component";
import { ProductComponent } from "./products/product/product.component";

import { CategoryService } from "./categories/shared/category.service";
import { I_CATEGORY_SERVICE } from "./categories/shared/icategory.service";
import { I_PRODUCT_SERVICE } from "./products/shared/iproduct.service";

import { InMemoryDataService } from './testing/in-memory-data.service';
import { CategoryMockService } from "./testing/category-mock.service";
import { ProductMockService } from "./testing/product-mock.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent
      },
      {
        path: 'product/:id',
        component: ProductComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    { provide: I_CATEGORY_SERVICE, useClass: CategoryMockService },
    { provide: I_PRODUCT_SERVICE, useClass: ProductMockService }
  ],
  declarations: [AppComponent, CategoryListComponent, CategoryComponent, DashboardComponent, ProductSummaryComponent, ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
