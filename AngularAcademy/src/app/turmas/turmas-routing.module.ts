import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmasListComponent } from './turmas-list/turmas-list.component';

const routes: Routes = [
  {path: 'turmas', component: TurmasListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
