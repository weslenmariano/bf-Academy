import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosSingleComponent } from './cursos-single/cursos-single.component';
import { AuthGuard } from '../login/shared/auth.guard';

const routes: Routes = [
  {path: 'cursos', component: CursosListComponent, canActivate: [AuthGuard]},
  {path: 'cursos/novo', component: CursosFormComponent, canActivate: [AuthGuard]},
  {path: 'cursos/edit/:id', component: CursosFormComponent, canActivate: [AuthGuard]},
  {path: 'cursos/:id', component: CursosSingleComponent, canActivate: [AuthGuard]}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
