import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Ádison";
  public idade: number = 33;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://s2-techtudo.glbimg.com/b5YztaIHpXYbpVYJsK0ySxOKW_w=/0x0:1344x768/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/A/h/ZskOJZQ9amSC55FcJROA/dream-studio-ai.png"
  public imgTitle: string = "Property Binding";

  public position: {x: number, y: number} = {x: 0, y: 0};
  constructor() {}

  ngOnInit(): void {  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
