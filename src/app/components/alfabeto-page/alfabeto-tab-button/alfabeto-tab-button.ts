import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alfabeto-tab-button',
  imports: [],
  templateUrl: './alfabeto-tab-button.html',
  styleUrl: './alfabeto-tab-button.css'
})

export class AlfabetoTabButton {
  @Input() texto: string = "";
  @Input() isActive: boolean = false;

  @Output() tabClicked = new EventEmitter<void>();
  
  onCLick(): void{
    this.tabClicked.emit();
  }
}
