import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart(){
    console.log("Iniciou a rolagem!");
  }

  logScrolling($event){
    console.log("Rolando...")
  }

  logScrollEnd(){
    console.log("Finalizou a rolagem!");
  }

}
