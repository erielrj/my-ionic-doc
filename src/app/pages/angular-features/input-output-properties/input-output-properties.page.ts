import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.page.html',
  styleUrls: ['./input-output-properties.page.scss'],
})
export class InputOutputPropertiesPage implements OnInit {

  //app-curso
  nomeDoCurso: string = 'Ionic';

  //app-contador
  valorInicial: number = 15;


  contagem: number;

  constructor() { }

  ngOnInit() {
  }

  //Recebendo os dados
  onMudouValor(evento){
    // console.log(evento)

    this.contagem = evento.novoValor;
  }



}
