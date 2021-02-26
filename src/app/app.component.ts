import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public uiOpen: boolean = false;
  public angularFeaturesOpen: boolean = false;

  color = 'yellow';

  public UIComponents = [
    { title: 'Botões', url: '/button', icon: 'grid' },
    { title: 'Alert', url: '/alert', icon: 'notifications-circle' },
    { title: 'Action Sheet', url: '/actionsheet', icon: 'file-tray-full' },
    { title: 'Badge', url: '/badge', icon: 'pricetag' },
    { title: 'Card', url: '/card', icon: 'stop' },
    { title: 'Checkbox', url: '/checkbox', icon: 'checkbox' },
    { title: 'Chip', url: '/chip', icon: 'pin' },
    { title: 'Content', url: '/content', icon: 'layers' },
    { title: 'Datetime', url: '/datetime', icon: 'calendar' },
    { title: 'FAB', url: '/fab', icon: 'color-filter' },
    { title: 'Grid', url: '/grid', icon: 'grid' },
  ];
  
  public angularFeatures = [
    { title: 'Data Binding', url: '/button', icon: 'grid' },
  ]

  constructor() {}
}
