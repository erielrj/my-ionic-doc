import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  constructor(
    // Injetando o AlertController
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  // Alert Default

  async alert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Alert Multiplos Botões

  async alertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Multiple',
      subHeader: 'Choice Option',
      message: 'This is an alert message.',
      buttons: ['Yes', 'No', 'Cancel'],
    });

    await alert.present();
  }

  // Alert Confirm (Botões com ações)

  async alertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: '<strong>Tem certeza?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',

          // Ação que ao clicar
          handler: () => {
            console.log('Cancelado!');
          },
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log("Confirmado!");
          }
        }
      ],
    });

    await alert.present();
  }


  // Alert Prompt Form

  async alertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }


  // Alert Prompt Auth

  async alertPromptAuth(){
    const alert = await this.alertCtrl.create({
      header: 'Área Restrita',
      message: 'Faça login para acessar',
      inputs: [
        {
          name: 'email',
          type: 'text',
          label: 'E-mail',
          value: '',
          placeholder: 'Digite seu E-mail',
        },
        {
          name: 'passwd',
          type: 'password',
          label: 'Senha',
          value: '',
          placeholder: 'Digite sua Senha',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log("Cancelado!")
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            // Recuperando dados
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }



  // Alert Radio

  async alertRadio() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }


  // Alert Checkbox

  async alertCheckbox() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

}
