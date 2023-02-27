import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

  constructor() { }

  getAllTurmas(){

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
