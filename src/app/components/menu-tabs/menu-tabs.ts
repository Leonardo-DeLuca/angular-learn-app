import { Component } from '@angular/core';
import { TabButton } from "../tab-button/tab-button";

@Component({
  selector: 'app-menu-tabs',
  imports: [TabButton],
  templateUrl: './menu-tabs.html',
  styleUrl: './menu-tabs.css'
})
export class MenuTabs {
  activeTabIndex: number = 0;

  setActiveTab(index: number): void{
    this.activeTabIndex = index
  }
}
