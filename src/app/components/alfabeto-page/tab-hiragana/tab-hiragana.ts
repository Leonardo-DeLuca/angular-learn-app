import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Flashcard } from "../../flashcard/flashcard";
import { HiraganaList } from '../services/hiragana-list';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-tab-hiragana',
  imports: [Flashcard],
  templateUrl: './tab-hiragana.html',
  styleUrl: './tab-hiragana.css'
})

export class TabHiragana implements OnChanges {
  @Input() group: number = 0;

  hiraganaService: HiraganaList = inject(HiraganaList);
  hiraganaList: Character[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['group']) {
      const value = changes['group'].currentValue;
      this.hiraganaList = value
        ? this.hiraganaService.getByGroup(value)
        : this.hiraganaService.getAll();
    }
  }
}
