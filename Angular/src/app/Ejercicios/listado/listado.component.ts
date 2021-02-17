import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {

  lista : any[] = ['Ana', 'Sara', 'Yolanda', 'Carmen']
  array :number [] = [1 ,2 ,3 ,4]
  numero = 2

  ngOnInit(): void {
  }

}
