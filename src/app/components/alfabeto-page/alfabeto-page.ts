import { ChangeDetectionStrategy, Component, inject, Output} from '@angular/core';
import { AlfabetoTabButton } from "./alfabeto-tab-button/alfabeto-tab-button";
import { GroupTabButton } from "./group-tab-button/group-tab-button";
import { Groups } from '../../services/groups';
import { Buttons } from '../../interfaces/buttons';
import { Tabs } from '../../services/tabs';
import { TabHiragana } from "./tab-hiragana/tab-hiragana";
import { TabKatakana } from "./tab-katakana/tab-katakana";
import { ProgressBar } from "./progress-bar/progress-bar";

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
  groupService: Groups = inject(Groups);
  tabsList: Buttons[] = [];
  tabService: Tabs = inject(Tabs);

  checkedStates: Record<string, boolean> = {};
  @Output() totalChecked: number = 0;

  ngOnInit(): void{
    this.groupList = this.groupService.getAll();
    this.tabsList = this.tabService.getAll();

    const savedStates = localStorage.getItem('checkedStates');
    if (savedStates) {
      this.checkedStates = JSON.parse(savedStates);
    }

    this.updateTotalChecked();
  }

  setActiveTab(index: number): void{
    this.activeTabIndex = index
  }

  setActiveGroup(index: number): void{
    this.activeGroupIndex = index;
  }

  resetGroup(){
    this.activeGroupIndex = 0;
  }

  onCheckedChange(kana: string, isChecked: boolean): void{
    this.checkedStates[kana] = isChecked;
    localStorage.setItem('checkedStates', JSON.stringify(this.checkedStates));

    this.updateTotalChecked();
  }

  updateTotalChecked(): void{
    this.totalChecked = Object.values(this.checkedStates).filter(value => value).length;
  }
}