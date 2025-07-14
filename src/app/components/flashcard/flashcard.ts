import { Component, Input } from '@angular/core';
import { CheckButton } from "../check-button/check-button";

@Component({
  selector: 'app-flashcard',
  imports: [CheckButton],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.css'
})
export class Flashcard {
  @Input() strokes: string = "";
  @Input() kana: string = "";
  @Input() romaji: string = "";
  @Input() example: string = "";
  @Input() meaning: string = "";
  @Input() group: string = "";
  flipped: boolean = false;
  checked: boolean = false;

  toggleFlip(): void {
    this.flipped = !this.flipped;
  }  
}
