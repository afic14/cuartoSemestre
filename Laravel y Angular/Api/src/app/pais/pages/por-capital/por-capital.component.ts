import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { ApiPaisesService } from '../../services/api-paises-services.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string = "Prueba"
  paises:Country[] = []
  hayError:boolean = false
  constructor(private api:ApiPaisesService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.hayError = false
    this.api.buscarPaisPorCapital(termino).subscribe
    ((data) => {this.paises = data}),
    (err)=>{this.hayError = true
    console.log(err)}
  }

}
