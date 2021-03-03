import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {

  private url:string = 'https://restcountries.eu/rest/v2'
  constructor(private http:HttpClient) 
  { 

  }
  buscarPais(termino:string): Observable<any>{
    const uri = `${this.url}/name/${termino}`
    return this.http.get(uri);
  }

  buscarPaisPorRegion(termino:string): Observable<any>{
    const uri = `${this.url}/region/${termino}`
    return this.http.get(uri)
  }

  buscarPaisPorCapital(termino:string): Observable<any>{
    const uri = `${this.url}/capital/${termino}`
    return this.http.get(uri)
  }
}
