import { Component, OnInit } from '@angular/core';
import { Turma } from '../shared/turmas.model';
import { TurmasService } from '../shared/turmas.service';

@Component({
  selector: 'app-turmas-list',
  templateUrl: './turmas-list.component.html',
  styleUrls: ['./turmas-list.component.scss']
})
export class TurmasListComponent implements OnInit {

  turmas : Turma[]

  constructor(
    private service : TurmasService
  ) {  }

  ngOnInit(): void {
      this.turmas = this.service.getAllTurmas();
  }
}
