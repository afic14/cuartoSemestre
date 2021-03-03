import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-region-input',
  templateUrl: './region-input.component.html',
  styleUrls: ['./region-input.component.css']
})
export class RegionInputComponent implements OnInit {

  @Output () onEnter:EventEmitter<string> = new EventEmitter;
  termino:string = ""
  constructor() { }

  buscar(){
    this.onEnter.emit(this.termino)
  }
  ngOnInit(): void {
  }

}
