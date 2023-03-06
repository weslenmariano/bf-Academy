import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Curso } from '../shared/cursos.model';
import { CursosService } from '../shared/cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  formulario: FormGroup
  cursoId:number
  spin: boolean = false
  cursoSelecionado: Curso
  erro: any
  subscriptions: Subscription[] = []

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private route: ActivatedRoute, 
    private toastr: ToastrService
  ) {   }

  ngOnInit(): void {
    this.cursoId =  Number(this.route.snapshot.paramMap.get('id')) // pega os parametros da url de acordo com o que esta configurado na rota do routing.module.ts
    this.iniciaForm()

    if (this.cursoId){
      this.subscriptions.push(this.getCurso())

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
      nome: ["ja preenchido"],
      thumb: [],
      cargaHoraria: [],
      duracao: [],
      valor: [],
      dificuldade: [],
      descricao: []
    })
  }

  getCurso(){
    return this.service.getSingleCurso(this.cursoId).subscribe({
      next: (res: Curso) => {
        this.cursoSelecionado = res
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
        this.toastr.error('Erro ao gravar informações: '+ erro.name,'Erro!')
      },
      complete: () => {
        this.spin = false
        this.toastr.success('Informações gravadas com sucesso!','Sucesso!')
      }
    })
  }
}
