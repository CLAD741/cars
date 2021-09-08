import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { CarCardComponent } from './car-card/car-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CarsListComponent,
    CarsDetailComponent,
    CarCardComponent
    ],
  exports: [CarsListComponent]                
})
export class CarsModule { }
