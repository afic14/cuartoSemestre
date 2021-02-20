import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';


@Component({
    selector:'app-pruebas',
    templateUrl:'./pruebas.component.html'
})

export class PruebasComponent implements OnInit{
    array :number [] = [1 ,2 ,3 ,4]
    numero = 1
    numeroDeProductos = 0
    ngOnInit(){}
}