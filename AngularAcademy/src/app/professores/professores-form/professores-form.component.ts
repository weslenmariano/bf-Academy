import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../shared/professores.model';
import { ProfessoresService } from '../shared/professores.service';

@Component({
  selector: 'app-professores-form',
  templateUrl: './professores-form.component.html',
  styleUrls: ['./professores-form.component.scss']
})
export class ProfessoresFormComponent implements OnInit{

  formulario: FormGroup
  professorId:number
  spin: boolean = false
  professorSelecionado: Professor

    constructor(
      private fb: FormBuilder,
    private service: ProfessoresService,
    private route: ActivatedRoute
    ) {  }

    ngOnInit(): void {
      this.professorId =  Number(this.route.snapshot.paramMap.get('id')) // pega os parametros da url de acordo com o que esta configurado na rota do routing.module.ts
      this.iniciaForm()
  
      if (this.professorId){
        this.getProfessor()
      }
  
    }
  
    iniciaForm(){
      
  
      this.formulario = this.fb.group({

        id: [],
        nome: [],
        thumb: [],
        skills: [],
        origem: [],
        bandeira: [],
        descricao: []
      })
    }
  
    getProfessor(){
      this.service.getSingleProfessor(this.professorId).subscribe({
        next: (res: Professor) => {
          this.professorSelecionado = res
          console.log('*** res:', res) // tmp
          this.formulario.patchValue(res)
  
          /* // ou de forma individual por campo
          this.formulario.patchValue({
            duracao: "1 semana",
            dificuldade: 2,
            valor: "R$ 4.500,00"
            ...
          })
          // ou de forma individual por campo
          this.formulario.patchValue({
            duracao: res.duracao,
            dificuldade: res.dificuldade,
            valor: res.valor
            ...
          })
          */
        },
        error: () => {},
        complete: () => {}
      })
    }
  
    onSubmit(){
      this.spin = true
      console.log('Enviou')
      console.log('Form:', this.formulario )
  
      let form = this.formulario.value
      if (this.professorId){
        console.log('Editando')
        this.service.editProfessor(form).subscribe({
          next: () => {},
          error: () => {},
          complete: () => {
            this.spin = false
          }
        })
      }
      else{
        console.log('cadastrando')
        this.service.createProfessor(form).subscribe({
          next: (res: any) => {},
          error: () => {},
          complete: () => {
            this.spin = false
          }
        })
      }
      
    }

}
