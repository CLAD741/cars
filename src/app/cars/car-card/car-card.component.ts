import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';


import { selectCar } from 'src/app/store/cars/cars.actions';
import { CarState } from 'src/app/store/cars/cars.state';
import { Car } from '../car.model';



@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() car:Car;
  constructor(
    private store:Store<CarState>,
    private router: Router
    ) { }

  ngOnInit() {
  }

  details(){
    this.store.dispatch(selectCar({car:this.car}))
    this.router.navigate(['/detail']);
  }

}
