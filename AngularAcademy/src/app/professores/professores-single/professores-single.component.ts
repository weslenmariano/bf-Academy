import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Professor } from '../shared/professores.model';
import { ProfessoresService } from '../shared/professores.service';

@Component({
  selector: 'app-professores-single',
  templateUrl: './professores-single.component.html',
  styleUrls: ['./professores-single.component.scss']
})
export class ProfessoresSingleComponent implements OnInit{

  professorSelecionado: Professor
  professorId: number
  subscriptions: Subscription[] = []

  constructor(
    private service: ProfessoresService,  // <-------- injetando o servico de curso service
    private route: ActivatedRoute
  ) {
        
  }

  ngOnInit(): void {
    this.professorId =  Number(this.route.snapshot.paramMap.get('id')) // pega os parametros da url de acordo com o que esta configurado na rota do routing.module.ts
    this.subscriptions.push(this.getProfessor())
  }

  ngOnDestroy(){
    if(this.subscriptions){
      this.subscriptions.forEach( subs => {
        subs?.unsubscribe()
      })
    }
  }

  getProfessor(){
    return this.service.getSingleProfessor(this.professorId).subscribe({
      next: (res: Professor) => {
        this.professorSelecionado = res
        console.log('*** res:', res) // tmp
      },
      error: () => {},
      complete: () => {}
    })
  }
}
