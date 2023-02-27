import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmasRoutingModule } from './turmas-routing.module';
import { TurmasListComponent } from './turmas-list/turmas-list.component';


@NgModule({
  declarations: [
    TurmasListComponent
  ],
  imports: [
    CommonModule,
    TurmasRoutingModule
  ], 
  exports: [
    TurmasListComponent
  ]
})
export class TurmasModule { }
