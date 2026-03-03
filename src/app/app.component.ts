import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { selectCart, selectCartQuantity } from './store/carts.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SignalsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular-basics5';
  cart: Observable<number>;
  cartList: Observable<any>;
  productCart: any[]=[];

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    // this.cart = this.store.select('cartCount');
    this.cartList = this.store.select(selectCart);
    console.log("cartList",this.cartList);
    
    this.store.select(selectCart).subscribe((res)=>{
      this.productCart = res.cart;
      console.log("productcart list",this.productCart);
    })

    this.store.select(selectCartQuantity).subscribe((cartCount)=>{
      let cartQuantity = cartCount;
      console.log("cart count from new selector named selectCartQuantity",cartQuantity);
      
    })
  }
  
}
