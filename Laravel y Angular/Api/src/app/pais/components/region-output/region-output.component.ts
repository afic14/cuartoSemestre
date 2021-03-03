import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-region-output',
  templateUrl: './region-output.component.html',
  styleUrls: ['./region-output.component.css']
})
export class RegionOutputComponent implements OnInit {

  @Input() paises:Country[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
