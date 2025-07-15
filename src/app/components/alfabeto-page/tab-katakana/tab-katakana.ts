import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Flashcard } from "../../flashcard/flashcard";
import { Character } from '../../../interfaces/character';
import { KatakanaList } from '../../../services/katakana-list';

@Component({
  selector: 'app-tab-katakana',
  imports: [Flashcard],
  templateUrl: './tab-katakana.html',
  styleUrl: './tab-katakana.css'
})
export class TabKatakana implements OnChanges{
  @Input() group: number = 0;
  @Input() checkedStates: Record<string, boolean> = {}
  
  @Output() checkedChange = new EventEmitter<{ kana: string, checked: boolean }>();

  katakanaList: Character[] = [];
  katakanaService: KatakanaList = inject(KatakanaList);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['group']) {
      const value = changes['group'].currentValue;
      this.katakanaList = value
        ? this.katakanaService.getByGroup(value)
        : this.katakanaService.getAll();
    }
  }

  onCardChecked(event: {kana: string, checked: boolean}){
    this.checkedChange.emit(event);
  }
}
