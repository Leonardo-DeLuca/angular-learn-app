import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Flashcard } from "../../flashcard/flashcard";
import { HiraganaList } from '../../../services/hiragana-list';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-tab-hiragana',
  imports: [Flashcard],
  templateUrl: './tab-hiragana.html',
  styleUrl: './tab-hiragana.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TabHiragana implements OnChanges {
  @Input() group: number = 0;
  @Input() checkedStates: Record<string, boolean> = {}

  @Output() checkedChange = new EventEmitter<{ kana: string, checked: boolean }>();

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

  onCardChecked(event: {kana: string, checked: boolean}){
    this.checkedChange.emit(event);
  }
}
