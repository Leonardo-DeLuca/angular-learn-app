import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Output } from '@angular/core';
import { AlfabetoTabButton } from "./alfabeto-tab-button/alfabeto-tab-button";
import { GroupTabButton } from "./group-tab-button/group-tab-button";
import { Groups } from '../../services/groups';
import { Buttons } from '../../interfaces/buttons';
import { Tabs } from '../../services/tabs';
import { TabHiragana } from "./tab-hiragana/tab-hiragana";
import { TabKatakana } from "./tab-katakana/tab-katakana";
import { ProgressBar } from "./progress-bar/progress-bar";
import { AuthService } from '../../services/auth.service';
import { AlfabetoStateService } from '../../services/alfabeto-state-service';

@Component({
  selector: 'app-alfabeto-page',
  imports: [AlfabetoTabButton, GroupTabButton, TabHiragana, TabKatakana, ProgressBar],
  templateUrl: './alfabeto-page.html',
  styleUrl: './alfabeto-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlfabetoPage {
  activeTabIndex: number = 0;
  activeGroupIndex: number = 0;

  groupList: Buttons[] = [];
  tabsList: Buttons[] = [];
  checkedStates: Record<string, boolean> = {};
  @Output() totalChecked: number = 0;

  groupService = inject(Groups);
  tabService = inject(Tabs);
  alfabetoStateService = inject(AlfabetoStateService);
  authService = inject(AuthService);

  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.groupList = this.groupService.getAll();
    this.tabsList = this.tabService.getAll();
  
    this.authService.currentUser$.subscribe(() => {
      this.loadCheckedStates();
    });
  }
  

  private loadCheckedStates(): void {
    this.alfabetoStateService.getCheckedStates().then(states => {
      this.checkedStates = states;
      this.updateTotalChecked();
      this.cdr.markForCheck();  // <-- força atualização do OnPush
    });
  }

  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  setActiveGroup(index: number): void {
    this.activeGroupIndex = index;
  }

  resetGroup(): void {
    this.activeGroupIndex = 0;
  }

  onCheckedChange(kana: string, isChecked: boolean): void {
    this.checkedStates[kana] = isChecked;
    this.updateTotalChecked();
    this.saveCheckedStates();
  }

  updateTotalChecked(): void {
    this.totalChecked = Object.values(this.checkedStates).filter(value => value).length;
  }

  private saveCheckedStates(): void {
    console.log('Salvando estados do alfabeto:', this.checkedStates); 
    this.alfabetoStateService.saveCheckedStates(this.checkedStates);
  }
}
