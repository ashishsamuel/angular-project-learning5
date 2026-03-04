import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgrxApiService {

  constructor() { }

  fetchFruits() {
    const fruitsList = [
      {name:'Apple',price:250, quantity: '1 kg'},
      {name:'Orange',price:350, quantity: '2 kg'},
      {name:'Grape',price:150, quantity: '1 kg'},
      {name:'Pappaya',price:300, quantity: '2 kg'},
    ]

    return of(fruitsList);
  }

  fetchVegetables() {
    const vegetablesList = [
      {name:'Tomato',price:150, quantity: '1 kg'},
      {name:'Carrot',price:50, quantity: '2 kg'},
      {name:'Brinjal',price:70, quantity: '1 kg'},
      {name:'Cucumber',price:200, quantity: '2 kg'},
    ]

    return of(vegetablesList);
  }
}
