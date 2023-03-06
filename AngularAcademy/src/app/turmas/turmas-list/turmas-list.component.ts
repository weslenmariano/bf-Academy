import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/cursos/shared/cursos.model';
import { CursosService } from 'src/app/cursos/shared/cursos.service';
import { Turma } from '../shared/turmas.model';
import { TurmasService } from '../shared/turmas.service';

@Component({
  selector: 'app-turmas-list',
  templateUrl: './turmas-list.component.html',
  styleUrls: ['./turmas-list.component.scss']
})
export class TurmasListComponent implements OnInit {

  turmas : Turma[]
  subscriptions: Subscription[] = []
  cursos: Curso[]

  constructor(
    private service : TurmasService,
    private cursosService: CursosService
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
}
