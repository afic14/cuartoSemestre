import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
}

