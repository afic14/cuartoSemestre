import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { RegionInputComponent } from './components/region-input/region-input.component';
import { RegionOutputComponent } from './components/region-output/region-output.component';
import { CapitalOutputComponent } from './components/capital-output/capital-output.component';
import { CapitalInputComponent } from './components/capital-input/capital-input.component';

@NgModule({
  declarations: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent, PaisTableComponent, PaisInputComponent, RegionInputComponent, RegionOutputComponent, CapitalOutputComponent, CapitalInputComponent],
  exports:[PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PaisModule { }
