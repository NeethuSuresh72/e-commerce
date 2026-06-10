import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';
import { Footer } from './ui/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bweb');
}
