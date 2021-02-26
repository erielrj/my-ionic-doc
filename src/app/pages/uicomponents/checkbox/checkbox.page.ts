import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  public additional: any[] = [
    {
      name: 'Ovo de codorna',
      isChecked: true,
      price: 2.0,
    },
    {
      name: 'Pure de batatas',
      isChecked: true,
      price: 2.5,
    },
    {
      name: 'Molho barbecue',
      isChecked: false,
      price: 1.5,
    },
    {
      name: '+ Bacon',
      isChecked: false,
      price: 3.0,
    },
  ];

  constructor() {}

  ngOnInit() {}


  mostrar(){
    console.log(this.additional);
  }
}
