import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosSingleComponent } from './cursos-single/cursos-single.component';

const routes: Routes = [
  {path: 'cursos', component: CursosListComponent},
  {path: 'cursos/novo', component: CursosFormComponent},
  {path: 'cursos/edit/:id', component: CursosFormComponent},
  {path: 'cursos/:id', component: CursosSingleComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
