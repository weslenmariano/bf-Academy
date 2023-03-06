import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmasFormComponent } from './turmas-form/turmas-form.component';
import { TurmasListComponent } from './turmas-list/turmas-list.component';

const routes: Routes = [
  {path: 'turmas', component: TurmasListComponent},
  {path: 'turmas/nova', component: TurmasFormComponent},
  {path: 'turmas/edit/:id', component: TurmasFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
