import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  title: string 

  constructor() {
    
  }

  ngOnInit(): void{
    this.title = 'Angular Academy'

    let title = 'variavel let'

    console.log('this.title', this.title)
    console.log('variavel let title', title)
  }

  exibirTitle(){
    this.title = 'Angular Academy X'
    console.log(this.title)
     
  }
  
}
