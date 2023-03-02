import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { ProfessoresListComponent } from './professores-list/professores-list.component';
import { ProfessoresSingleComponent } from './professores-single/professores-single.component';

const routes: Routes = [
  {path: 'professores', component: ProfessoresListComponent},
  {path: 'professores/novo', component: ProfessoresFormComponent},
  {path: 'professores/edit/:id', component: ProfessoresFormComponent},
  {path: 'professores/:id', component: ProfessoresSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
