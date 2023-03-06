import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Curso } from '../shared/cursos.model';
import { CursosService } from '../shared/cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  cursos: Curso[] 
  // apos ter criado o model de Curso em shared e importado aqui no escopo, mudamos o tipo any para o tipo Curso
  spin: boolean = false
  erro: any
  subscriptions: Subscription[] = [] // Boas praticas para controlar subscribes dos serviços
  imgExtensions: string[] = ['.jpg', '.png', '.gif']
  deleteConfirmId: number

  constructor(
    private service: CursosService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
      this.subscriptions.push(this.getCursos())
      
  }

  ngOnDestroy(){
    if(this.subscriptions){
      this.subscriptions.forEach( subs => {
        subs?.unsubscribe()
      })
    }
  }

  getCursos(){
    this.spin = true
    return this.service.getAllCursos().subscribe({
      next: (resposta) => {
        console.log('Retorno API', resposta)
        this.cursos = resposta
      }, // pegando a resposta que a api retornoou
      error: (erro) => {
        this.spin = false
        this.erro = erro.message
      }, // erro que pode acontecer na api
      complete: () => {
        this.spin = false
      } // complete o que devera acontecer quando concluir a requisicao
    })
    //this.cursos = this.service.getAllCursos()
    //console.log(this.cursos)
  }

  deleteConfirm(cursoId: number){
    this.deleteConfirmId = cursoId
  }

  deleteCancel(){
    this.deleteConfirmId = 0
  }

  remove(cursoId: number){
     
        this.service.deleteCurso(cursoId).subscribe({
        next: (resposta) => {
          console.log('Retorno API', resposta)
        }, // pegando a resposta que a api retornoou
        error: (erro) => {
          this.spin = false
          this.erro = erro.message

        }, // erro que pode acontecer na api
        complete: () => {
          this.spin = false
          this.toastr.show('Informações excluidas com sucesso!','Sucesso!')
          this.subscriptions.push(this.getCursos())
        } // complete o que devera acontecer quando concluir a requisicao
      })
    
  }
}
 