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
   let url = `${this.API}/cursos`
   return this.http.get<Curso[]>(url)
  }

  // microserviço
  getSingleCurso(cursoId:number){
    let url = `${this.API}/cursos/${cursoId}`
    return this.http.get<Curso>(url).pipe(take(1)) // pipe(take(1)) faz a requisição apenas uma vez nã api
  }

  createCurso(obj: Curso){
    let url = `${this.API}/cursos/`
    //verificar como a api espera receber os parametros
    return this.http.post(url, obj).pipe(take(1))
  }

  editCurso(obj: Curso){
    let url = `${this.API}/cursos/${obj.id}`
    //verificar como a api espera receber os parametros
    return this.http.put<Curso>(url, obj).pipe(take(1))
  }

  save(obj: Curso){
    if(obj.id){
      return this.editCurso(obj)
    }
    else{
      return this.createCurso(obj)
    }

  }

  deleteCurso(id: number){
    let url = `${this.API}/cursos/${id}`
    return this.http.delete(url).pipe(take(1)) // pipe(take(1)) faz a requisição apenas uma vez nã api
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
