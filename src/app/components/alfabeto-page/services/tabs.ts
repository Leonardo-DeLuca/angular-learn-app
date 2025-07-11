import { Injectable } from '@angular/core';
import { Buttons } from '../../../interfaces/buttons';

@Injectable({
  providedIn: 'root'
})
export class Tabs {
  protected tabsList: Buttons[] = [
    {
      id: 0,
      text: "Todos"
    },
    {
      id: 1,
      text: "Hiragana"
    },
    {
      id: 2,
      text: "Katakana"
    }
  ]

  getAll(): Buttons[]{
    return this.tabsList;
  }
}
