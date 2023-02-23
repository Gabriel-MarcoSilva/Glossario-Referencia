import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenciasRoutingModule } from './referencias-routing.module';
import { CadReferenciasComponent } from './components/cad-referencias/cad-referencias.component';
import { ListReferenciasComponent } from './components/list-referencias/list-referencias.component';
import { EditReferenciaComponent } from './components/edit-referencia/edit-referencia.component';


@NgModule({
  declarations: [
    CadReferenciasComponent,
    ListReferenciasComponent,
    EditReferenciaComponent
  ],
  imports: [
    CommonModule,
    ReferenciasRoutingModule
  ]
})
export class ReferenciasModule { }
