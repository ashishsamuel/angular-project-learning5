import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../store/cart.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private store: Store){}

  addToCart() {
    this.store.dispatch(addToCart({message:" Hello to addtocart action "}));
  }

  removeFromCart() {
    this.store.dispatch(removeFromCart()); 
  }

}
