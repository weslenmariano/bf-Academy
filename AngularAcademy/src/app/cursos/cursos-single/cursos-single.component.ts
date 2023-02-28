import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../shared/cursos.model';
import { CursosService } from '../shared/cursos.service';

@Component({
  selector: 'app-cursos-single',
  templateUrl: './cursos-single.component.html',
  styleUrls: ['./cursos-single.component.scss']
})
export class CursosSingleComponent implements OnInit{

  cursoSelecionado: Curso
  cursoId: number

  constructor(
    private service: CursosService,  // <-------- injetando o servico de curso service
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cursoId =  Number(this.route.snapshot.paramMap.get('id')) // pega os parametros da url de acordo com o que esta configurado na rota do routing.module.ts
    this.getCurso()  
  }

  getCurso(){
    this.service.getSingleCurso(this.cursoId).subscribe({
      next: (res: Curso) => {
        this.cursoSelecionado = res
        console.log('*** res:', res) // tmp
      },
      error: () => {},
      complete: () => {}
    })
  }
}
