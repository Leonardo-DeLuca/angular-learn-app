import { Component, inject, Output } from '@angular/core';
import { AlfabetoTabButton } from "./alfabeto-tab-button/alfabeto-tab-button";
import { GroupTabButton } from "./group-tab-button/group-tab-button";
import { Groups } from './services/groups';
import { Buttons } from '../../interfaces/buttons';
import { Tabs } from './services/tabs';
import { TabHiragana } from "./tab-hiragana/tab-hiragana";
import { TabKatakana } from "./tab-katakana/tab-katakana";

@Component({
  selector: 'app-alfabeto-page',
  imports: [AlfabetoTabButton, GroupTabButton, TabHiragana, TabKatakana],
  templateUrl: './alfabeto-page.html',
  styleUrl: './alfabeto-page.css'
})
export class AlfabetoPage {
  activeTabIndex: number = 0;
  @Output() activeGroupIndex: number = 0;

  groupList: Buttons[] = [];
  groupService: Groups = inject(Groups);
  tabsList: Buttons[] = [];
  tabService: Tabs = inject(Tabs);

  constructor(){
    this.groupList = this.groupService.getAll();
    this.tabsList = this.tabService.getAll();
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
}