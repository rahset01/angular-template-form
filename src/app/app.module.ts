import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
=======
=======
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
>>>>>>> 34e1914 (Angular template driven forms)

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule
>>>>>>> 603009e (Rebase)
=======
    AppRoutingModule,
    FormsModule
>>>>>>> 34e1914 (Angular template driven forms)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
