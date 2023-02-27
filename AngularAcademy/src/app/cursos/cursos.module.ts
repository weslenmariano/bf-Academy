import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListComponent } from './cursos-list/cursos-list.component';


@NgModule({
  declarations: [
    CursosListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  exports: [
    CursosListComponent
  ]

})
export class CursosModule { }
