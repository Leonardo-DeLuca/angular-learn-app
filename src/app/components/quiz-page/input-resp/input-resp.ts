import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-resp',
  imports: [],
  templateUrl: './input-resp.html',
  styleUrl: './input-resp.css'
})
export class InputResp {
  @Output() enterPress = new EventEmitter<string>();

  @Input() status = "";
  @Input() readonly = false;
  @Input() valor: string = '';


  @ViewChild('inputResp') inputResp!: ElementRef<HTMLInputElement>;

  classe: string = 'input-resp';

  onKeyUpEnter(resposta: string): void {
    this.enterPress.emit(resposta);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status'] || changes['valor']) {
      this.classe = 'input-resp';
      if (this.status === 'correct') {
        this.classe += ' correct';
      } else if (this.status === 'incorrect') {
        this.classe += ' incorrect';
      }
  
      if (this.inputResp) {
        setTimeout(() => {
          this.inputResp.nativeElement.value = this.valor ?? '';
        }, 50);
      }
      
    }
  }
  
}
