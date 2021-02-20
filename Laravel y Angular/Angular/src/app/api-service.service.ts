import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}
  url = 'http://127.0.0.1:8000/api/users'
  public getDataS() {
    return this.http.get(this.url).subscribe((data) => { console.log(data) })
  }
}
