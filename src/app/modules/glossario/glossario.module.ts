import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlossarioRoutingModule } from './glossario-routing.module';
import { CadGlossarioComponent } from './components/cad-glossario/cad-glossario.component';


@NgModule({
  declarations: [
    CadGlossarioComponent
  ],
  imports: [
    CommonModule,
    GlossarioRoutingModule
  ]
})
export class GlossarioModule { }
