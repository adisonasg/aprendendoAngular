import { ChangeDetectorRef, Component, NgZone, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  standalone: false,
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})

export class DiretivasEstruturaisComponent implements OnInit, OnDestroy {
  
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public nome: string = 'Ádison';
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Adison Gualberto", idade: 33 },
    { nome: "Dener", idade: 45 },
    { nome: "Karol", idade: 18 },
  ];
  intervalId: any;
  
  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {}
  
  ngOnInit(): void {
    console.log("Componente inicializado");

    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.zone.run(() => {
          this.nome = this.nome === "Ádison" ? "Outro Nome" : "Ádison"; // ✅ Alternando corretamente entre strings
          console.log("Valor alterado:", this.nome);
          this.cdr.detectChanges();
        });
      }, 2000);
    });
  }
  
  ngOnDestroy(): void {
    console.log("Componente destruído");
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Função para alternar o valor de 'conditionClick'
  onClick(): void {
    this.conditionClick = !this.conditionClick;
    console.log("conditionClick:", this.conditionClick);
  }

  // Função para adicionar um novo item à lista
  onClickAddList(): void {
    this.list.push({ nome: "Novo Nome", idade: 30 });
  }

  onClickEventList(index: number): void {
    console.log('Item clicado:', this.list[index]);
  }
}
