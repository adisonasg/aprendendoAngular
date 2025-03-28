import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <!--
      <app-title *ngIf="destruir"></app-title>
      <br>
      <button (click)="destruirComponent()">Destruir componente</button>
    -->
    
    <!--<app-diretivas-estruturais>
      <h1> Aulas de Diretivas Atributo </h1>
      <hr>
    </app-diretivas-estruturais>-->

    <!--<app-diretivas-atributos> </app-diretivas-atributos>-->
    
    <!--<app-new-component></app-new-component>-->

    <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()">Add</button>

    <!--<ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>-->

    <!--<app-output (enviarDados)="setDados($event)"></app-output>-->
    <app-food-list><app-food-list/>
    <router-outlet />
  `,
})
export class AppComponent implements OnInit{

  public destruir: boolean = true;
  public addValue: number = 19;

  public getDados: {nome: string, idade: number} | undefined;
  
  constructor() { 
  }
  
  ngOnInit(): void {  
  }

  public add(){
    this.addValue += 2;
  }
  
  public destruirComponent() {
    this.destruir = false;
  }

  public setDados(event: { nome: string, idade: number}) {
    this.getDados = event;
  }
   
}
