import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursosModule } from './cursos/cursos.module';
import { ProfessoresModule } from './professores/professores.module';
import { HomeComponent } from './home/home.component';
import { TurmasModule } from './turmas/turmas.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true, // documentacao do componente https://www.npmjs.com/package/ngx-toastr
      timeOut: 3000,
      positionClass: 'toast-top-center'
    }),
    BrowserAnimationsModule,
    SharedModule,
    CursosModule, 
    ProfessoresModule,
    TurmasModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
