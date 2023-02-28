import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinComponent } from './spin/spin.component';



@NgModule({
  declarations: [
    SpinComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [ // outros modulos e componentes podem usar esse componente
    SpinComponent
  ]
})
export class SharedModule { }
