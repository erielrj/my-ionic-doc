import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Botões', url: '/button', icon: 'grid' },
    { title: 'Alert', url: '/alert', icon: 'notifications-circle' },
    { title: 'Action Sheet', url: '/actionsheet', icon: 'file-tray-full' },
  ];
  constructor() {}
}
