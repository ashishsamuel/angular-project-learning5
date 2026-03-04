import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { vegetablesSelect } from '../../store/vegetables.selector';
import { ItemVegetableState } from '../../store/app.state';
import { loadVegetables } from '../../store/vegetables.action';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss'
})
export class VegetablesComponent implements OnInit{

  constructor(private store: Store<ItemVegetableState>){}
  
    ngOnInit() {

      this.store.dispatch(loadVegetables());
      this.store.select(vegetablesSelect).subscribe((res)=>{
        console.log("vegetableslist",res);
      })
    }

}
