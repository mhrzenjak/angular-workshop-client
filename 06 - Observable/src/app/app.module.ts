import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CategoryService } from "./categories/shared/category.service";

@NgModule({
  imports: [
    BrowserModule,
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
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [ CategoryService ],
  declarations: [AppComponent, CategoryListComponent, CategoryComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
