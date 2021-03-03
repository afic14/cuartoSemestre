import { Component, OnInit } from '@angular/core';
import { ApiPaisesService } from '../../services/api-paises-services.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string = "Esto es una prueba" 
  paises:Country[] = []
  hayError :boolean = false;

  constructor(private api:ApiPaisesService) {
    
   }

  
  buscar(termino:string){
    this.hayError = false;
    this.api.buscarPais(termino).subscribe(
      (data) => {this.paises = data
      console.log(data)},
      (err) =>{console.log(err)
      this.hayError = true}
    )
    console.log(this.termino)
  }

  ngOnInit(): void {
  }

}
