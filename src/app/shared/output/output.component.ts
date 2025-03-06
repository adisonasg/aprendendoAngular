import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: false,
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter<{ nome: string; idade: number }>();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: "Adison Gualberto", idade: 33 },
    { nome: "Karolzinha", idade: 10 },
    { nome: "Karoline", idade: 19 }
  ];

  constructor() {}

  ngOnInit(): void {}

  public getDados(event: number) {
    if (event >= 0 && event < this.list.length) {
      this.enviarDados.emit(this.list[event]);
    } else {
      console.error('Índice inválido:', event);
    }
  }
}
