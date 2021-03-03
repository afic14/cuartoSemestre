import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-capital-output',
  templateUrl: './capital-output.component.html',
  styleUrls: ['./capital-output.component.css']
})
export class CapitalOutputComponent implements OnInit {

  @Input () paises:Country[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
