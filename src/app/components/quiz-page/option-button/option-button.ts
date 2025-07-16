import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.html',
  styleUrls: ['./option-button.css']
})
export class OptionButton {
  @Input() altText: string = "";
  @Input() status: 'correct' | 'incorrect' | 'neutral' = 'neutral';
  @Input() disabled: boolean = false;

  @Output() respostaSelecionada = new EventEmitter<string>();

  classe: string = 'option-btn';

  emiteResposta(): void {
    if (this.disabled) return;
    this.respostaSelecionada.emit(this.altText);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.classe = 'option-btn';
    if (this.status === 'correct') {
      this.classe += ' correct';
    } else if (this.status === 'incorrect') {
      this.classe += ' incorrect';
    }
  }
}
