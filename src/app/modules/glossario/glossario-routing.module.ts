import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadGlossarioComponent } from './components/cad-glossario/cad-glossario.component';
import { EditGlossarioComponent } from './components/edit-glossario/edit-glossario.component';
import { ListGlossarioComponent } from './components/list-glossario/list-glossario.component';

const routes: Routes = [
  {path:"", component:ListGlossarioComponent},
  {path:"edit/:id", component: EditGlossarioComponent},
  {path:"cad-glossario", component: CadGlossarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlossarioRoutingModule { }
