import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { CategoryListComponent }  from './categoryList/categoryList.component';
import { CategoryComponent }  from './category/category.component';

@NgModule({
  imports:      [ BrowserModule,
       RouterModule.forRoot([
      {
        path: 'category/:name',
        component: CategoryComponent
      }
    ])
   ],
  declarations: [ AppComponent, CategoryListComponent, CategoryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
