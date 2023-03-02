import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresRoutingModule } from './professores-routing.module';
import { ProfessoresListComponent } from './professores-list/professores-list.component';
import { ProfessoresSingleComponent } from './professores-single/professores-single.component';
import { ProfessoresFormComponent } from './professores-form/professores-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfessoresListComponent,
    ProfessoresSingleComponent,
    ProfessoresFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ProfessoresRoutingModule
  ], 
  exports: [
    ProfessoresListComponent
  ]
})
export class ProfessoresModule { }
