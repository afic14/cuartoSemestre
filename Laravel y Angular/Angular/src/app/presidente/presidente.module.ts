import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [MainPageComponent,
  MainPageComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[MainPageComponent]
})
export class PresidenteModule { }
