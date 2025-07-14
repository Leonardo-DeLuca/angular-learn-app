import { Injectable } from '@angular/core';
import { Buttons } from '../../../interfaces/buttons';

@Injectable({
  providedIn: 'root'
})
export class Groups {
  protected groupList: Buttons[] = [
    {
      id: 0,
      text: "Todos"
    },
    {
      id: 1,
      text: "Vogais"
    },
    {
      id: 2,
      text: "K"
    },
    {
      id: 3,
      text: "S"
    },
    {
      id: 4,
      text: "T"
    },
    {
      id: 5,
      text: "N"
    },
    {
      id: 6,
      text: "H"
    },
    {
      id: 7,
      text: "M"
    },
    {
      id: 8,
      text: "Y"
    },
    {
      id: 9,
      text: "R"
    },
    {
      id: 10,
      text: "W"
    }
  ]

  getAll(): Buttons[] {
    return this.groupList;
  }

  getTextById(id: number): string{
    let group = this.groupList.find((group) => group.id === id);

    return !group ? "" : group.text;
  }
}
