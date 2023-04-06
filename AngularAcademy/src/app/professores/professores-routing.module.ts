import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { ProfessoresListComponent } from './professores-list/professores-list.component';
import { ProfessoresSingleComponent } from './professores-single/professores-single.component';
import { AuthGuard } from '../login/shared/auth.guard';

const routes: Routes = [
  {path: 'professores', component: ProfessoresListComponent, canActivate: [AuthGuard]},
  {path: 'professores/novo', component: ProfessoresFormComponent, canActivate: [AuthGuard]},
  {path: 'professores/edit/:id', component: ProfessoresFormComponent, canActivate: [AuthGuard]},
  {path: 'professores/:id', component: ProfessoresSingleComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
