import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CursosService } from '../shared/cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  formulario: FormGroup
  constructor(
    private fb: FormBuilder,
    private service: CursosService
  ) {   }

  ngOnInit(): void {
      this.iniciaForm()
  }

  iniciaForm(){
    this.formulario = this.fb.group({
      id: [],
      nome: ["ja preenchido"],
      thumb: [],
      cargaHoraria: [],
      duracao: [],
      valor: [],
      dificuldade: [],
      descricao: []
    })
  }

  onSubmit(){
    console.log('Enviou')
    console.log('Form:', this.formulario.value )
    let form = this.formulario.value
    this.service.createCurso(form).subscribe({
      next: () => {}
    })
  }



}
