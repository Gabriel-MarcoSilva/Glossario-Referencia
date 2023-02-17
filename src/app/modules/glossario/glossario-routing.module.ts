import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadGlossarioComponent } from './components/cad-glossario/cad-glossario.component';

const routes: Routes = [{
  path:"", component:CadGlossarioComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlossarioRoutingModule { }
