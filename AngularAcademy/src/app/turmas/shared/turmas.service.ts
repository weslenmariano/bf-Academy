import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Turma } from './turmas.model';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

  API = environment.apiUrl
  //turmaId: number

  constructor( 
    private http: HttpClient
  ) { }


  getAllTurmas(){
    let url = `${this.API}/turmas`
    return this.http.get<Turma[]>(url)
   }
 
   // microserviço
   getSingleTurma(turmaId:number){
     let url = `${this.API}/turmas/${turmaId}`
     return this.http.get<Turma>(url).pipe(take(1)) // pipe(take(1)) faz a requisição apenas uma vez nã api
   }
 
   createTurma(obj: Turma){
     let url = `${this.API}/turmas/`
     //verificar como a api espera receber os parametros
     return this.http.post(url, obj).pipe(take(1))
   }
 
   editTurma(obj: Turma){
     let url = `${this.API}/turmas/${obj.id}`
     //verificar como a api espera receber os parametros
     return this.http.put<Turma>(url, obj).pipe(take(1))
   }
 
   save(obj: Turma){
     if(obj.id){
       return this.editTurma(obj)
     }
     else{
       return this.createTurma(obj)
     }
 
   }
 
   deleteTurma(id: number){
     let url = `${this.API}/turmas/${id}`
     return this.http.delete(url).pipe(take(1)) // pipe(take(1)) faz a requisição apenas uma vez nã api
   }

  /*
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
*/
 
}
