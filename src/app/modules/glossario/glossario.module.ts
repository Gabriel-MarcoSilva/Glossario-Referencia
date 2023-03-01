import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlossarioRoutingModule } from './glossario-routing.module';
import { CadGlossarioComponent } from './components/cad-glossario/cad-glossario.component';
import { ListGlossarioComponent } from './components/list-glossario/list-glossario.component';
import { EditGlossarioComponent } from './components/edit-glossario/edit-glossario.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadGlossarioComponent,
    ListGlossarioComponent,
    EditGlossarioComponent
  ],
  imports: [
    CommonModule,
    GlossarioRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GlossarioModule { }
