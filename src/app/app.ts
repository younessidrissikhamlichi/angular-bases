import { Component, signal } from '@angular/core';
import { Cart } from "./component/cart/cart";

@Component({
  selector: 'app-root',
  imports: [Cart],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-bases');
  
}
