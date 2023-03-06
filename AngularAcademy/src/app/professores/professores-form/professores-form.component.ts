import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
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
  erro: any
  professorSelecionado: Professor
  subscriptions: Subscription[] = []

    constructor(
      private fb: FormBuilder,
    private service: ProfessoresService,
    private route: ActivatedRoute,
    private toastr: ToastrService
    ) {  }

    ngOnInit(): void {
      this.professorId =  Number(this.route.snapshot.paramMap.get('id')) // pega os parametros da url de acordo com o que esta configurado na rota do routing.module.ts
      this.iniciaForm()
  
      if (this.professorId){
        this.getProfessor()
      }
  
    }

    ngOnDestroy(){
      if(this.subscriptions){
        this.subscriptions.forEach( subs => {
          subs?.unsubscribe()
        })
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
  
      this.subscriptions.push(this.salvar())
      
      
    }

    salvar(){
      let form = this.formulario.value
      
      return this.service.save(form).subscribe({
        next: (res: any) => {console.log("Retorno do servico")},
        error: (erro) => {
          console.log('Erro Encontrado: ', erro.message)
          this.spin = false
          this.erro = erro.message
        },
        complete: () => {
          this.spin = false
        }
      })
    }

}
