import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   *
   */
  sessaoExpirada: boolean
  constructor( 
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('userData')){

      let dataExpira =  localStorage.getItem('expiraData')
      let hoje = new Date()
      let hojeBr = formatDate(hoje, 'dd/MM/yyyy HH:mm', 'en')

      console.log("*** ROTA ATIVADAS")
      console.log("*** hojeBr : ", hojeBr )
      console.log("*** dataExpira : ", dataExpira )
      
      if(dataExpira){
        console.log("*** hojeBr > dataExpira : ", (hojeBr > dataExpira) )

        if(hojeBr > dataExpira){
          localStorage.removeItem('userData')
          localStorage.removeItem('expiraData')
          this.router.navigate(['/login'])
          return false
        }
      }

      return true
    }
    this.router.navigate(['/login'])
    return false
  }
  
}
