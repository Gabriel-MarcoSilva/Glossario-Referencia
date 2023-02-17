import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GlossarioModule } from './modules/glossario/glossario.module';
import { ReferenciasModule } from './modules/referencias/referencias.module';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "glossario", loadChildren: () => import("./modules/glossario/glossario.module").then((m) => GlossarioModule)},
  {path: "referencias", loadChildren: () => import("./modules/referencias/referencias.module").then((m) => ReferenciasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
