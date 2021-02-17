import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './Ejercicios/contador.component';
import { EstudiantesComponent } from './Ejercicios/estudiantes.component';
import { ListadoComponent } from './Ejercicios/listado/listado.component';
import { PruebasComponent } from './Ejercicios/Pruebas/pruebas.component';
import { CineComponent } from './Ejercicios/cine/cine.component';
import { TeatroComponent } from './Ejercicios/teatro/teatro.component';
import { MusicaComponent } from './Ejercicios/musica/musica.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EstudiantesComponent,
    ListadoComponent,
    PruebasComponent,
    CineComponent,
    TeatroComponent,
    MusicaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
