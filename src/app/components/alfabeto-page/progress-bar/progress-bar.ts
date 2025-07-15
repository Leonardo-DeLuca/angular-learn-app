import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { HiraganaList } from '../../../services/hiragana-list';
import { KatakanaList } from '../../../services/katakana-list';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {
  isCollapsed: boolean = false;
  @Input() totalChecked: number = 0;
  progress: number = 0;

  hiraganaService: HiraganaList = inject(HiraganaList);
  katakanaService: KatakanaList = inject(KatakanaList);
  totalCharacters: number = this.hiraganaService.getLenght() + this.katakanaService.getLenght();


  collapseBar(): void{
    this.isCollapsed = !this.isCollapsed;
  }

  updateProgress(): void{
    this.progress = +(this.totalChecked / this.totalCharacters * 100).toFixed(2);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalChecked']) {
      this.updateProgress();
    }
  }
}
