import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmasRoutingModule } from './turmas-routing.module';
import { TurmasListComponent } from './turmas-list/turmas-list.component';
import { TurmasFormComponent } from './turmas-form/turmas-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TurmasListComponent,
    TurmasFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TurmasRoutingModule,
    ReactiveFormsModule
  ], 
  exports: [
    TurmasListComponent
  ]
})
export class TurmasModule { }
