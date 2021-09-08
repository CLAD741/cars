import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterList, loadCars } from '../store/cars/cars.actions';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit() {
  }

  search(val){
    if(val.length == 0){
      this.store.dispatch(loadCars())
    }else{
      this.store.dispatch(filterList({text:val}))
    }
  }
}
