import { Component, OnInit } from '@angular/core';
import { TabButton } from "../tab-button/tab-button";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-tabs',
  imports: [TabButton],
  templateUrl: './menu-tabs.html',
  styleUrl: './menu-tabs.css'
})
export class MenuTabs{
  activeTabIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveTabByUrl();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setActiveTabByUrl();
    });
  }
  
  private setActiveTabByUrl(): void {
    const currentUrl = this.router.url;
    if (currentUrl.startsWith('/alfabeto')) {
      this.activeTabIndex = 0;
    } else if (currentUrl.startsWith('/quiz')) {
      this.activeTabIndex = 1;
    } else if (currentUrl.startsWith('/kanji')) {
      this.activeTabIndex = 2;
    } else if (currentUrl.startsWith('/dicas')) {
      this.activeTabIndex = 3;
    }
  }

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
        this.router.navigate(['/kanji']);
        break;
      case 3:
        this.router.navigate(['/dicas']);
        break;
    }
  }
}
