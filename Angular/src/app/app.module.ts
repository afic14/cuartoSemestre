import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './Ejercicios/contador.component';
import { EstudiantesComponent } from './Ejercicios/estudiantes.component';
import { ListadoComponent } from './Ejercicios/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EstudiantesComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
