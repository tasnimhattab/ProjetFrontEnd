import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './sharedComponents/footer/footer';
import { Header } from './sharedComponents/header/header';
import { Home } from './pages/home/home';
import { ListConf } from './pages/list-conf/list-conf';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Home, ListConf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('FrontendProject');
}

