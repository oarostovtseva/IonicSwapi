import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/persons-input.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, PersonsComponent, PersonInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
