import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCars } from './store/cars/cars.actions';
import { CarState } from './store/cars/cars.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'omnicars';
  constructor(){

  }

  ngOnInit(){
    
  }
  
}
