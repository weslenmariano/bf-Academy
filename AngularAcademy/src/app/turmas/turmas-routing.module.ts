import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmasFormComponent } from './turmas-form/turmas-form.component';
import { TurmasListComponent } from './turmas-list/turmas-list.component';
import { AuthGuard } from '../login/shared/auth.guard';

const routes: Routes = [
  {path: 'turmas', component: TurmasListComponent, canActivate: [AuthGuard]},
  {path: 'turmas/nova', component: TurmasFormComponent, canActivate: [AuthGuard]},
  {path: 'turmas/edit/:id', component: TurmasFormComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
