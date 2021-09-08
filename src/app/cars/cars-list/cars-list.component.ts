import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCars } from 'src/app/store/cars/cars.actions';
import { selectCarsFeature, selectFilterFeature } from 'src/app/store/cars/cars.selectors';
import { Car } from '../car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  /* cars:Car[]=[]; */
  cars$: Observable<Car[]>
  filteredCars$: Observable<Car[]>
  
  constructor(private store: Store){
    this.cars$ = this.store.select(selectCarsFeature);
    this.filteredCars$ = this.store.select(selectFilterFeature);
  }
  ngOnInit(){
    this.store.dispatch(loadCars());
  }

}
