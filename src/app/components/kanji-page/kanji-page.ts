import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { KanjiFlashcard } from "./kanji-flashcard/kanji-flashcard";
import { KanjiList } from '../../services/kanji-list';
import { Kanji } from '../../interfaces/kanji';
import { AlfabetoStateService } from '../../services/alfabeto-state-service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-kanji-page',
  imports: [KanjiFlashcard],
  templateUrl: './kanji-page.html',
  styleUrl: './kanji-page.css'
})
export class KanjiPage {
  kanjiService: KanjiList = inject(KanjiList);
  kanjiList: Kanji[] = this.kanjiService.getAll();

  checkedStates: Record<string, boolean> = {};
  alfabetoStateService = inject(AlfabetoStateService);
  authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(() => {
      this.loadCheckedStates();
    });
  }

  private loadCheckedStates(): void {
    this.alfabetoStateService.getCheckedStates().then(states => {
      this.checkedStates = states;
      this.cdr.markForCheck();
    });
  }

  onCheckedChange(character: string, isChecked: boolean): void {
    this.checkedStates[character] = isChecked;
    this.saveCheckedStates();
  }

  private saveCheckedStates(): void {
    this.alfabetoStateService.saveCheckedStates(this.checkedStates);
  }
}
