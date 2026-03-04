import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fruitsListSelector, fruitsSelect } from '../../store/fruits.selector';
import { AppState, ItemFruitState } from '../../store/app.state';
import { loadFruits } from '../../store/fruits.action';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export class FruitsComponent implements OnInit{

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.store.dispatch(loadFruits());
    this.store.select(fruitsListSelector).subscribe((res)=>{
      console.log("fruitslist",res);
    })
  }

}
