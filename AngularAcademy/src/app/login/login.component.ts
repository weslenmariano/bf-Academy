import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  /**
   *
   */
  constructor(
    private service: AuthService, 
    private toastr: ToastrService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    //window.location.reload()
  }

  autenticar(user: string, pass: string){
    let login = this.service.autenticaLogin(user, pass)

    console.log("*** Login : ", login )


    if(login){
      localStorage.setItem('userData',user)

      let hoje = new Date()
      let hojeBr = formatDate(hoje, 'dd/MM/yyyy HH:mm', 'en')

      hoje.setMinutes(hoje.getMinutes() + 20)
      let expiraBr = formatDate(hoje, 'dd/MM/yyyy HH:mm', 'en')

      console.log("*** HojeBr : ", hojeBr )
      console.log("*** expiraBr : ", expiraBr )

      this.toastr.success('Usuário autenticado com secesso!')


      localStorage.setItem('expiraData',expiraBr)
      this.router.navigate(['/']).then(() => {
        window.location.reload()
      })
      

      
    }else{
      this.toastr.error('Usuario e/ou senha inválidos', 'Verifique os dados informados')
    }
  }
}
