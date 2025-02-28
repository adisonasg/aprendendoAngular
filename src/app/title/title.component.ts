import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy{

  @Input() public title: string = "Bem vindo";

  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(): void { }
  ngOnDestroy(): void {
    console.log("Deu bom, ele foi desctruído!")
  }

}
