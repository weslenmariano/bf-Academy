import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListComponent } from './cursos-list/cursos-list.component';

const routes: Routes = [
  {path: 'cursos', component: CursosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
