import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  private list: Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovo"
  ];

  constructor() { }

  public foodList() {
    return this.list;
  }
}