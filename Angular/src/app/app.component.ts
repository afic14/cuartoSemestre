import { Component } from '@angular/core';
import { CineComponent } from './Ejercicios/cine/cine.component';
import { TeatroComponent } from './Ejercicios/teatro/teatro.component';
import { MusicaComponent } from './Ejercicios/musica/musica.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public component;
  constructor() {
    this.component = CineComponent;
  }
  title = 'practicaAngular';
  numero = 20;
  pressButton(){
    return (alert('Has puchado el botón'))
  }

  sumarRandom(numero: number){
    let num = Math.random()*30
    alert(num)
    return numero + num
  }
  

  changeComponent(componente:any) {
    switch (componente) {
      case 'Musica':
        this.component = MusicaComponent;
        break;
      case 'Teatro':
        this.component = TeatroComponent;
        break;
      default:
        this.component = CineComponent;
        break;
    }
  }
}

