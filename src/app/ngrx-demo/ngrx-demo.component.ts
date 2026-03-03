import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProductsToCart, addToCart } from '../store/cart.actions';

@Component({
  selector: 'app-ngrx-demo',
  standalone: true,
  imports: [],
  templateUrl: './ngrx-demo.component.html',
  styleUrl: './ngrx-demo.component.scss'
})
export class NgrxDemoComponent {
  
  constructor(private store:Store){}

  addToCart(fruitDetails:any) {
    console.log("fruit Details",fruitDetails);
    
    this.store.dispatch(addProductsToCart(fruitDetails));
  }
}
