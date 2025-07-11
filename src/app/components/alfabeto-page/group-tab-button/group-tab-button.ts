import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-group-tab-button',
  imports: [],
  templateUrl: './group-tab-button.html',
  styleUrl: './group-tab-button.css'
})
export class GroupTabButton {
  @Input() isActive: boolean = false;
  @Input() texto: string = "";

  @Output() tabClicked = new EventEmitter<void>();

  onCLick(): void{
    this.tabClicked.emit();
  }
}
