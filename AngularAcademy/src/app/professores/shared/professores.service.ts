import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professor } from './professores.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  API = environment.apiUrl

  constructor( 
    private http: HttpClient
  ) { }



  getAllProfessores(){
    return this.http.get<Professor[]>(`${this.API}/professores`)
  }

  // microserviço
  getSingleProfessor(professorId:number){
    return this.http.get<Professor>(`${this.API}/professores/${professorId}`).pipe(take(1)) // pipe(take(1)) faz a requisição apenas uma vez nã api
  }

  createProfessor(obj: Professor){
    //verificar como a api espera receber os parametros
    return this.http.post(`${this.API}/professores/`, obj).pipe(take(1))
  }

  editProfessor(obj: Professor){
    //verificar como a api espera receber os parametros
    return this.http.put<Professor>(`${this.API}/professores/${obj.id}`, obj).pipe(take(1))
  }


/*
  getAllProfessoresOld(){

    return [
      { 
        nome: 'Brad Pitt', 
        thumb:'assets/images/professores/brad-pitt.jpg',
        skills:'HTML, CSS'

      },
      { 
        nome: 'Tim Berners Lee', 
        thumb:'assets/images/professores/tim-berners-lee.jpg',
        skills:'HTML'
        
      },
      { 
        nome: 'James Gosling', 
        thumb:'assets/images/professores/james-gosling.jpg',
        skills:'JAVA'
        
      }
    ]
  }
  */
}
