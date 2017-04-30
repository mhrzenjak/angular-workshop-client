import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CategoryListComponent }  from './categories/category-list/category-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CategoryListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
