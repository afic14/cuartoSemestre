import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {

  constructor(private api: ApiServiceService){

  }
  array2: any = [];
  lista : any[] = ['Ana', 'Sara', 'Yolanda', 'Carmen']
  array :number [] = [1 ,2 ,3 ,4]
  numero = 2
  elementoBorrado = ' '

  borrarElemento(){
    this.elementoBorrado = this.lista.shift() || ' '
  }

  getData(){
    this.api.getDataS()
  }
  
  ngOnInit(): void {
    
  }

}
