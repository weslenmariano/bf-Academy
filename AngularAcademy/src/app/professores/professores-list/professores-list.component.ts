import { Component, OnInit } from '@angular/core';
import { Professor } from '../shared/professores.model';
import { ProfessoresService } from '../shared/professores.service';

@Component({
  selector: 'app-professores-list',
  templateUrl: './professores-list.component.html',
  styleUrls: ['./professores-list.component.scss']
})
export class ProfessoresListComponent implements OnInit{

  professores: Professor[] // apos ter criado o model de Curso em shared e importado aqui no escopo, mudamos o tipo any para o tipo Curso

  constructor(
    private service: ProfessoresService
  ) { }

  ngOnInit(): void {
      this.getProfessores()
  }

  getProfessores(){
    
    this.professores = this.service.getAllProfessores()
    //console.log(this.cursos)

  }

}
