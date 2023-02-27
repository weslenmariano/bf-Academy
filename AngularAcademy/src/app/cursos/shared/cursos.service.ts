import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getAllCursos(){

    return [
      { 
        nome: 'Angular', 
        thumb:'assets/images/curso-angular-logo.png'
      },
      { 
        nome: 'Html 5', 
        thumb:'assets/images/curso-html5-logo.png'
      }
    ]
  }
}
