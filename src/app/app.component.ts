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
    
    <!--<app-diretivas-estruturais></app-diretivas-estruturais>-->
    
    <app-diretivas-atributos> </app-diretivas-atributos>
    <router-outlet />
  `,
})
export class AppComponent implements OnInit{

  public destruir: boolean = true;
  
  constructor() { 
  }
  
  ngOnInit(): void {  

  }
   
}
