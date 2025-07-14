import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  imports: [],
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
}
