import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Professor } from '../shared/professores.model';
import { ProfessoresService } from '../shared/professores.service';

@Component({
  selector: 'app-professores-list',
  templateUrl: './professores-list.component.html',
  styleUrls: ['./professores-list.component.scss']
})
export class ProfessoresListComponent implements OnInit{

  professores: Professor[] // apos ter criado o model de Curso em shared e importado aqui no escopo, mudamos o tipo any para o tipo Curso
  spin: boolean = false
  erro: any
  subscriptions: Subscription[] = []

  constructor(
    private service: ProfessoresService
  ) { }

  ngOnInit(): void {
      this.subscriptions.push(this.getProfessores())
  }

  ngOnDestroy(){
    if(this.subscriptions){
      this.subscriptions.forEach( subs => {
        subs?.unsubscribe()
      })
    }
  }

  getProfessores(){
    this.spin = true
   return this.service.getAllProfessores().subscribe({
      next: (resposta: Professor[]) => {
        console.log('Retorno API', resposta)
        this.professores = resposta

      },
      error: (erro) => {
        this.spin = false
        this.erro = erro.message
      },
      complete: () => {
        this.spin = false
      }
    })
    //this.professores = this.service.getAllProfessores()
    //console.log(this.cursos)

  }

}
