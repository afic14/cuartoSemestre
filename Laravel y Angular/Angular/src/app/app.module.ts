import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjerciciosModule } from './Ejercicios/ejercicios.module';
import { CommonModule } from '@angular/common';
import { PresidenteModule } from './presidente/presidente.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    EjerciciosModule,
    CommonModule,
    PresidenteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
