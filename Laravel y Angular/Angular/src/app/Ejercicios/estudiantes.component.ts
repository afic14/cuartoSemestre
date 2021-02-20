import { Component } from '@angular/core'

@Component({
    selector:'app-estudiantes',
    templateUrl:'./estudiantes.component.html'
})

export class EstudiantesComponent{
    nombre = 'Juan';
    edad = 18;

    obtenerNombre(){
        return `${this.nombre} - ${this.edad}`
    }

    get nombreMayuscula(){
        return this.nombre.toUpperCase()
    }
}