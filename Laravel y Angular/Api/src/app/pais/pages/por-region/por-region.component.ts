import { Component, OnInit } from '@angular/core';
import { ApiPaisesService } from '../../services/api-paises-services.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  termino:string = "Ejemplo"
  paises:Country[] = []
  hayError:boolean = false
  constructor(private api:ApiPaisesService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError = false;
    this.api.buscarPaisPorRegion(termino).subscribe
    ((data) => {this.paises = data}),
    (err)=>{this.hayError = true
    console.log(err)}
  }

}
