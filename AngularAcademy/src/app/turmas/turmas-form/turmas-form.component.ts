import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/cursos/shared/cursos.model';
import { CursosService } from 'src/app/cursos/shared/cursos.service';
import { Turma } from '../shared/turmas.model';
import { TurmasService } from '../shared/turmas.service';

@Component({
  selector: 'app-turmas-form',
  templateUrl: './turmas-form.component.html',
  styleUrls: ['./turmas-form.component.scss']
})
export class TurmasFormComponent implements OnInit{

  
  @Input('turmaDados') turmaDados : Turma
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
    
    if(this.turmaDados){
      this.editCurso(this.turmaDados)
    }
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

  editCurso(turma: Turma){
    this.formulario.patchValue(turma)
    this.formulario.controls['curso'].disable()
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
    console.log("CursoSelecionado", cursoSelecionado)
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
    this.formulario.controls['curso'].enable()
    let form = this.formulario.value
    console.log("Fomulario para salvar", form)
    //console.log("Curso selecionado", form.curso.value)
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
        this.activeModal.dismiss('save')

      }
    })
  }

}
