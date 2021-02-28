import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.page.html',
  styleUrls: ['./data-binding.page.scss'],
})
export class DataBindingPage implements OnInit {
  // Interpolation and Property Binding
  course: string = 'Ionic';
  cursoAngular: boolean = true;
  interpolation: string = 'https://i.imgur.com/J8mbORa.png';

  propertyBinding: string = 'https://i.imgur.com/IzseWAN.png';
  propertyBindingBind: string = 'https://i.imgur.com/AENKH6p.png';
  propertyBindingInterpolation: string = 'https://i.imgur.com/MJruPKD.png';

  // Event Binding
  conteudoAtual: string = '';
  conteudoSalvo: string = '';

  isMouseOver: boolean = false;

  // Two Way Data Binding
  name: string = '';

  pessoa: any = { name: 'Afonso', age: 25 };

  constructor() {}

  ngOnInit() {}

  // Interpolation and Property Binding

  getValue(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  // Event Binding

  onClick(): void {
    alert('Botão Clicado');
  }

  //--> Passando o Evento

  onKeyUp(event: KeyboardEvent): void {
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }

  //--> Passando o Elemento HTML */

  onSave(el: any): void {
    this.conteudoSalvo = el.value;
  }

  //--> Passando o valor

  onBlurSave(value: string): void {
    this.conteudoSalvo = value;
  }

  //--> Mouseover + Class Binding

  toggleMouseOver(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  //--> Mouseover + Element

  onMouseOver(el: any): void {
    el.style.backgroundColor = 'yellow';
    el.style.fontWeight = 'bold';
  }

  onMouseOut(el: any): void {
    el.style.backgroundColor = 'transparent';
    el.style.fontWeight = '400';
  }
}
