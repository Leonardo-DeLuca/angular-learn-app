import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTitle } from './components/header-title/header-title';
import { MenuTabs } from "./components/menu-tabs/menu-tabs";
import { AlfabetoPage } from "./components/alfabeto-page/alfabeto-page";
@Component({
  selector: 'app-root',
  imports: [HeaderTitle, MenuTabs, AlfabetoPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'japones';
}
