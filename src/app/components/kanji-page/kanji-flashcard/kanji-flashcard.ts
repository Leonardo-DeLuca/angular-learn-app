import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckButton } from "../../check-button/check-button";

@Component({
  selector: 'app-kanji-flashcard',
  imports: [CheckButton],
  templateUrl: './kanji-flashcard.html',
  styleUrl: './kanji-flashcard.css'
})

export class KanjiFlashcard {
  @Input() strokes: number = 0;
  @Input() readings: string = "";
  @Input() character: string = "";
  @Input() example: string = "";
  @Input() meaning: string = "";
  
  flipped: boolean = false;
  @Input() checked: boolean = false;

  @Output() checkedChange = new EventEmitter<{ kana: string, checked: boolean }>();

  toggleFlip(): void {
    this.flipped = !this.flipped;
  }

  onCardChecked(event: {kana: string, checked: boolean}){
    this.checkedChange.emit(event);
  }

}
