import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  // 2.1. Também é possível declarar os inputs aqui (como metadado do decoretor @Component)
  // inputs: ['nome'] // 2.2. (Caso a variável tenha o mesmo nome)
  // inputs: ['nomeCurso:nome'] // 2.3. Caso queira que o nome no HTML seja diferente
})
export class InputPropertyComponent implements OnInit {


  // 1.1. Definindo um input property (Padrão, mais utilizado):
  // @Input() nome: string = '';

  // 1.2. É possível diferenciar o nome da variável interno do nome externo passado pelo html
  @Input('nome') nomeCurso: string = '';

  // 2.4. Se declarar um input nos metadados basta declarar a variável aqui
  // nomeCurso: string;

  constructor() { }

  ngOnInit() {}

}
