import { Component } from '@angular/core';

@Component({
    selector: 'contador-root',
    template: `<h1>Hello that</h1>
    <span>{{numero}}</span>
<h1>ojai mark</h1>

<button (click) = "pressButton()">Puchalo</button>
<button (click) = "sumarRandom(numero)">Sumar Random</button>`
})
export class ContadorComponent {
    title = 'practicaAngular';
    numero = 20;
    otroNumero = 10;
    pressButton(){
      return (alert('Has puchado el botón'))
    }
  
    sumarRandom(numero: number){
      let num = Math.floor(Math.random()*10)
      return this.numero += num
    }
}