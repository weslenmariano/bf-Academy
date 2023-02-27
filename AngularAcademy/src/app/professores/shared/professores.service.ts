import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  constructor() { }

  getAllProfessores(){

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
