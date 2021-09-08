import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars:Car[]=[];
  
  constructor(private carService: CarService){}
  ngOnInit(){
    this.carService.getCars().subscribe((data)=>{
      this.cars = data;
    })
  }

}
