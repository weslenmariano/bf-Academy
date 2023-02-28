import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursosModule } from './cursos/cursos.module';
import { ProfessoresModule } from './professores/professores.module';
import { HomeComponent } from './home/home.component';
import { TurmasModule } from './turmas/turmas.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    HttpClientModule,
    SharedModule,
    CursosModule, 
    ProfessoresModule,
    TurmasModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
