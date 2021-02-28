import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']//,
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  // Output - Criando um emissor de eventos
  @Output() mudouValor = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
