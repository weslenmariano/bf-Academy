import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Turma } from './turmas.model';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

  API = environment.apiUrl

  constructor( 
    private http: HttpClient
  ) { }



  getAllTurmas(){
    return this.http.get<Turma[]>(`${this.API}/turmas`)
  }

  getAllTurmasOld(){

    return [
      { 
        curso: 'Angular'
        
      },
      { 
        curso: 'Html 5'
      }
    ]
  }

  cadastrar(){
    
  }

 
}
