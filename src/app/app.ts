import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTitle } from './components/header-title/header-title';
import { MenuTabs } from './components/menu-tabs/menu-tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderTitle, MenuTabs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'japones';
}
