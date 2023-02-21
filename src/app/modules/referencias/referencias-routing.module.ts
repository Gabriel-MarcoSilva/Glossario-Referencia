import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadReferenciasComponent } from './cad-referencias/cad-referencias.component';

const routes: Routes = [
  {path: "", component: CadReferenciasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenciasRoutingModule { }
