import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenciasRoutingModule } from './referencias-routing.module';
import { CadReferenciasComponent } from './cad-referencias/cad-referencias.component';


@NgModule({
  declarations: [
    CadReferenciasComponent
  ],
  imports: [
    CommonModule,
    ReferenciasRoutingModule
  ]
})
export class ReferenciasModule { }
