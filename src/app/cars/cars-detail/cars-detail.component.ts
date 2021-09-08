import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


import { unselectCar } from 'src/app/store/cars/cars.actions';
import { selectCarFeature } from 'src/app/store/cars/cars.selectors';
import { Car } from '../car.model';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.scss']
})
export class CarsDetailComponent implements OnInit {

  car$: Observable<Car>;
  constructor(private store:Store,private router: Router) {
    this.car$ = this.store.select(selectCarFeature);
   }

  ngOnInit() {
    this.car$.subscribe(result => {
      if(!result.brand){
        this.router.navigate([''])
      }
    });
  }

  backHome(){
    this.store.dispatch(unselectCar())
    this.router.navigate([''])
  }
}
