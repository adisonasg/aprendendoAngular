import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  standalone: false,
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit, OnDestroy {

  valor: boolean = false;
  intervalId: any;
  public heigth: string = "20px";
  public heightPx: string = "50px";
  public backgroundColor: string = "red";

  public nome: string = "";

  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngOnInit(): void {
    console.log("Componente inicializado");

    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.zone.run(() => {
          this.valor = !this.valor;
          console.log("Valor alterado:", this.valor);

                 // Lógica para atualizar heightPx e backgroundColor
                 if (this.valor) {
                  this.heightPx = "50px";
                  this.backgroundColor = "blue";
                } else {
                  this.heightPx = "20px";
                  this.backgroundColor = "red";
                }
                
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
}