import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlossarioRoutingModule } from './glossario-routing.module';
import { CadGlossarioComponent } from './components/cad-glossario/cad-glossario.component';
import { ListGlossarioComponent } from './components/list-glossario/list-glossario.component';
import { EditGlossarioComponent } from './components/edit-glossario/edit-glossario.component';


@NgModule({
  declarations: [
    CadGlossarioComponent,
    ListGlossarioComponent,
    EditGlossarioComponent
  ],
  imports: [
    CommonModule,
    GlossarioRoutingModule
  ]
})
export class GlossarioModule { }
