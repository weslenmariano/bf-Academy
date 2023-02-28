import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from './cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  API = environment.apiUrl

  constructor( 
    private http: HttpClient
  ) { }

  // microserviço
  getAllCursos(){
   return this.http.get<Curso[]>(`${this.API}/cursos`)
  }

  // microserviço
  getSingleCurso(cursoId:number){
    return this.http.get<Curso>(`${this.API}/cursos/${cursoId}`).pipe(take(1)) // pipe(take(1)) faz a requisição apenas uma vez nã api
  }

  createCurso(obj: Curso){
    //verificar como a api espera receber os parametros
    return this.http.post(`${this.API}/cursos/`, obj).pipe(take(1))
  }

  /*
  getAllCursosOld(){

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
  */
}
