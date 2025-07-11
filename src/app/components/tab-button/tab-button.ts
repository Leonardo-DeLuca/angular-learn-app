import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  imports: [],
  templateUrl: './tab-button.html',
  styleUrl: './tab-button.css'
})
export class TabButton {
  @Input() text: string = "";
  @Input() icone?: string;
  @Input() isActive: boolean = false;

  @Output() tabClicked = new EventEmitter<void>();

  onCLick(): void{
    this.tabClicked.emit();
  }
}
