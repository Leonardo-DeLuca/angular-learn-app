import { Component, inject } from '@angular/core';
import { Flashcard } from "../../flashcard/flashcard";
import { HiraganaList } from '../services/hiragana-list';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-tab-hiragana',
  imports: [Flashcard],
  templateUrl: './tab-hiragana.html',
  styleUrl: './tab-hiragana.css'
})
export class TabHiragana {
  hiraganaList: Character[] = [];
  hiraganaServer: HiraganaList = inject(HiraganaList);
  
  constructor(){
    this.hiraganaList = this.hiraganaServer.getAll();
  }
}
