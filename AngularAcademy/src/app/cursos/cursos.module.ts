import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosSingleComponent } from './cursos-single/cursos-single.component';
import { SharedModule } from '../shared/shared.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursosListComponent,
    CursosSingleComponent,
    CursosFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ],
  exports: [
    CursosListComponent
  ]

})
export class CursosModule { }
