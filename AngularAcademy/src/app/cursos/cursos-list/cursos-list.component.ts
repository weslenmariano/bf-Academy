import { Component, OnInit } from '@angular/core';
import { Curso } from '../shared/cursos.model';
import { CursosService } from '../shared/cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  cursos: Curso[] // apos ter criado o model de Curso em shared e importado aqui no escopo, mudamos o tipo any para o tipo Curso

  constructor(
    private service: CursosService
  ) { }

  ngOnInit(): void {
      this.getCursos()
  }

  getCursos(){
    
    this.cursos = this.service.getAllCursos()
    //console.log(this.cursos)
  }
}
 