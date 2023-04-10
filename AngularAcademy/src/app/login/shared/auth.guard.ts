import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   *
   */
  sessaoExpirada: boolean
  reload : boolean = false
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
          
          this.reload = false
          this.router.navigate(['/login'])
          console.log("*** Relaoad location " )
          if (!this.reload){
            window.location.reload()
            this.reload = true
          }  
          return false
        }
      }

      return true
    }
    this.router.navigate(['/login']) 
    
    //this.appc.logado = ''
    //if (!this.reload){
      //window.location.reload()
     // this.reload = true
    //}  
    //this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      //this.router.navigate(['login'])
      
    //})
     
    return false
  }
  
}
