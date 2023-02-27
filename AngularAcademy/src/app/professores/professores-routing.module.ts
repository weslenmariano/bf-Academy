import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresListComponent } from './professores-list/professores-list.component';

const routes: Routes = [
  {path: 'professores', component: ProfessoresListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
