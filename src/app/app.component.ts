import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SignalsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-basics5';

  cart = this.store.select('cartCount');
  
  constructor(private store: Store<{cartCount:number}>){}
}
