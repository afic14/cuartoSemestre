import { NgModule } from '@angular/core';
import { TeatroComponent } from './teatro/teatro.component';
import { PruebasComponent } from './Pruebas/pruebas.component';
import { MusicaComponent } from './musica/musica.component';
import { ListadoComponent } from './listado/listado.component';
import { CineComponent } from './cine/cine.component';
import { EstudiantesComponent } from './estudiantes.component';
import { ContadorComponent } from './contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        TeatroComponent,
        PruebasComponent,
        MusicaComponent,
        ListadoComponent,
        CineComponent,
        EstudiantesComponent,
        ContadorComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[ListadoComponent,
    PruebasComponent] 
})

export class EjerciciosModule{};