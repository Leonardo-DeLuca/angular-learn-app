import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-button',
  imports: [],
  templateUrl: './check-button.html',
  styleUrl: './check-button.css'
})
export class CheckButton {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggleCheck(event: MouseEvent) {
    event.stopPropagation();
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
