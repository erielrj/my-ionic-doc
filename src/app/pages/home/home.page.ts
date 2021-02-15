import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    // Injetando NavController para Navegar entre as rotas
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  navToBackPage(){
    this.navCtrl.navigateForward(['back'])
  }

}
