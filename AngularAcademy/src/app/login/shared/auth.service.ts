import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  autenticaLogin(user: string, pass: string){
    
    // simulando o retorno de uma API ou base de dados
    let userDB: any = {
      username: 'weslen',
      password: '1234'
    }
    ////

    if(user == userDB.username && pass == userDB.password){
      return true
    }

    return false

  }
}
