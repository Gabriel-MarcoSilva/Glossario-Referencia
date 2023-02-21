import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditReferenciaComponent } from './components/edit-referencia/edit-referencia.component';
import { ListReferenciasComponent } from './components/list-referencias/list-referencias.component';

const routes: Routes = [
  {path: "", component: ListReferenciasComponent},
  {path: "edit/:id", component: EditReferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenciasRoutingModule { }
