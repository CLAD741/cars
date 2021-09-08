import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsDetailComponent } from './cars/cars-detail/cars-detail.component';

const routes:Routes = [
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
