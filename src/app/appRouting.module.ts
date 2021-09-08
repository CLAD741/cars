import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsDetailComponent } from './cars/cars-detail/cars-detail.component';

const routes:Routes = [
  {path: '', component: CarsListComponent},
  {path:'detail', component: CarsDetailComponent}
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
