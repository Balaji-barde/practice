import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { StdTodosComponent } from './std-todos/std-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    StdTodosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
