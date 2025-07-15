import { Component } from '@angular/core';
import { TabButton } from "../tab-button/tab-button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tabs',
  imports: [TabButton],
  templateUrl: './menu-tabs.html',
  styleUrl: './menu-tabs.css'
})
export class MenuTabs {
  activeTabIndex: number = 0;

  constructor(private router: Router) {}

  setActiveTab(index: number): void{
    this.activeTabIndex = index;
    this.navegateToTab(this.activeTabIndex);
  }

  navegateToTab(index: number){
    switch(index){
      case 0:
        this.router.navigate(['/alfabeto']);
        break;
        
      case 1:
        this.router.navigate(['/quiz']);
        break;

      case 2:
        this.router.navigate(['/']);
        break;

      case 3:
        this.router.navigate(['/']);
        break
    }
  }
}
