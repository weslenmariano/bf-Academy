import { Component, OnInit } from '@angular/core';
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
  constructor(
    private service: CursosService
  ) { }

  ngOnInit(): void {
      this.getCursos()
  }

  getCursos(){
    this.spin = true
    this.service.getAllCursos().subscribe({
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
}
 