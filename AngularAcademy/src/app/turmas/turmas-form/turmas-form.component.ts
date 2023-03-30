import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/cursos/shared/cursos.model';
import { CursosService } from 'src/app/cursos/shared/cursos.service';
import { TurmasService } from '../shared/turmas.service';

@Component({
  selector: 'app-turmas-form',
  templateUrl: './turmas-form.component.html',
  styleUrls: ['./turmas-form.component.scss']
})
export class TurmasFormComponent implements OnInit{

  formulario: FormGroup
  cursos: Curso[]
  spin: boolean
  subscriptions: Subscription[] = []
  erro: string

  constructor(
    private fb: FormBuilder,
    private service: TurmasService,
    private cursosService: CursosService, 
    private toastr: ToastrService,
    public activeModal: NgbActiveModal
    ) { }

  ngOnInit(): void {
    this.iniciaForm()
    this.subscriptions.push(this.getCursos())
    
  }

  ngOnDestroy(){
    if(this.subscriptions){
      this.subscriptions.forEach( subs => {
        subs?.unsubscribe()
      })
    }
  }
  // VAR - forumulario: FormGroup
  // CONSTRUCTOR - private fb: FormBuilder
  iniciaForm(){
    this.formulario = this.fb.group({
      id:[],
      curso:[],
      inicio:[],
      cargaHoraria:[],
      duracao:[],
      valor:[],
      dificuldade:[]
    })
  }


  getCursos(){
    
    return this.cursosService.getAllCursos().subscribe({
      next: (resposta : Curso[]) => {
        console.log('Retorno API', resposta)
        this.cursos = resposta
      }, // pegando a resposta que a api retornoou
      error: (erro) => {}, // erro que pode acontecer na api
      complete: () => {} // complete o que devera acontecer quando concluir a requisicao
    })

  }

  changeCursos(){
    let cursoSelecionado: any = this.cursos.find(element => element.id == this.formulario.value.curso)
    cursoSelecionado.curso = cursoSelecionado.id
    cursoSelecionado.id = null
    this.formulario.patchValue(cursoSelecionado)
    
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
