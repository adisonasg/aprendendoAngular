import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {

  @Input() public contador: number = 0;
  Constructor() { }

  ngOnInit(): void {
  }

}
