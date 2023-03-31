import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/cursos/shared/cursos.model';
import { CursosService } from 'src/app/cursos/shared/cursos.service';
import { Turma } from '../shared/turmas.model';
import { TurmasService } from '../shared/turmas.service';
import { TurmasFormComponent } from '../turmas-form/turmas-form.component';

@Component({
  selector: 'app-turmas-list',
  templateUrl: './turmas-list.component.html',
  styleUrls: ['./turmas-list.component.scss']
})
export class TurmasListComponent implements OnInit {

  turmas : Turma[]
  subscriptions: Subscription[] = []
  cursos: Curso[]
  turmasSemFiltro: Turma[]
  modal: NgbModalRef

  constructor(
    private service : TurmasService,
    private cursosService: CursosService,
    public modalService: NgbModal
  ) {  }

  ngOnInit(): void {
      //this.turmas = this.service.getAllTurmas();
      this.subscriptions.push(this.getTurmas())
      this.subscriptions.push(this.getCursos())
      
  }

  ngOnDestroy(){
    if(this.subscriptions){
      this.subscriptions.forEach( subs => {
        subs?.unsubscribe()
      })
    }
  }

  getTurmas(){
    return this.service.getAllTurmas().subscribe({
      next: (resposta: Turma[]) => {
        console.log('Retorno API', resposta)
        this.turmas = resposta
        this.turmasSemFiltro = resposta
      },
      error: () => {},
      complete: () => {

      }
    })
    //this.professores = this.service.getAllProfessores()
    //console.log(this.cursos)

  }

  getCursos(){
    
    return this.cursosService.getAllCursos().subscribe({
      next: (resposta: Curso[]) => {
        console.log('Retorno API', resposta)
        this.cursos = resposta
        
      }, // pegando a resposta que a api retornoou
      error: (erro) => {}, // erro que pode acontecer na api
      complete: () => {
        let cursoSelecionado: any
        this.turmas.forEach( element  => {
          let cursoSelecionado: any = this.cursos.find(el => el.id == element.curso )
          element.cursoNome = cursoSelecionado?.nome
        })
      } // complete o que devera acontecer quando concluir a requisicao
    })

  }
  filtrar(keyfilter : string){
   this.zerarFiltro()
   if(keyfilter){
    this.turmas =  this.turmas.filter(f => f.cursoNome.toUpperCase().includes(keyfilter.toUpperCase()))
   }
  }

  zerarFiltro(){
    this.turmas = this.turmasSemFiltro 
  }

  // VAR - modal : NgbModalRef
  // CONSTRUCTOR - public modalService: NgbModal,
  openModal(turma?: Turma){
  // Ex:	this.modal = this.modalService.open(TurmasFormComponent )
    console.log("Turma", turma)
    this.modal = this.modalService.open(TurmasFormComponent,{ size: "lg"})
    this.modal.componentInstance.turmaDados = turma // turma dados pode ser o nome que quiser

    this.modal.result.catch((retorno) => {
      console.log("Retorno do modal para essa tela", retorno)
      if(retorno == 'save'){
        this.ngOnInit()
      }
    })

  }




}
