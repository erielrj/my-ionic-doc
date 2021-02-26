import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  constructor(private toastController: ToastController) {}

  ngOnInit() {}

  save() {
    this.presentToast("Dados salvos com sucesso!")

  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      cssClass: 'fab-toast',
      message: msg,
      duration: 2000
    });

    toast.present();
  }

}
