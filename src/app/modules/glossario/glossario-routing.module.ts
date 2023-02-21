import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditGlossarioComponent } from './components/edit-glossario/edit-glossario.component';
import { ListGlossarioComponent } from './components/list-glossario/list-glossario.component';

const routes: Routes = [
  {path:"", component:ListGlossarioComponent},
  {path:"edit/:id", component: EditGlossarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlossarioRoutingModule { }
