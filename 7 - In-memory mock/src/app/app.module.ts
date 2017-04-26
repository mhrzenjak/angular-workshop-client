import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListService } from "./category-list/category-list.service";

import { InMemoryDataService } from './testing/in-memory-data.service';
import { CategoryListMockService } from "./testing/category-list-mock.service";

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'category/:name',
        component: CategoryComponent
      }
    ])
  ],
  providers: [{ provide: CategoryListService, useClass: CategoryListMockService }],
  declarations: [AppComponent, CategoryListComponent, CategoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
