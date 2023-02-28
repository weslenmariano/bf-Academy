import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
