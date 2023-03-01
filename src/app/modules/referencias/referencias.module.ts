import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenciasRoutingModule } from './referencias-routing.module';
import { CadReferenciasComponent } from './components/cad-referencias/cad-referencias.component';
import { ListReferenciasComponent } from './components/list-referencias/list-referencias.component';
import { EditReferenciaComponent } from './components/edit-referencia/edit-referencia.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadReferenciasComponent,
    ListReferenciasComponent,
    EditReferenciaComponent
  ],
  imports: [
    CommonModule,
    ReferenciasRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReferenciasModule { }
