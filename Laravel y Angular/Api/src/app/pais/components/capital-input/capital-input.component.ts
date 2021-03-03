import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-capital-input',
  templateUrl: './capital-input.component.html',
  styleUrls: ['./capital-input.component.css']
})
export class CapitalInputComponent implements OnInit {

  @Output () onEnter:EventEmitter<string> = new EventEmitter()
  termino:string = ""
  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino)
    this.onEnter.emit(this.termino)
  }
}
