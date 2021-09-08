import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { CarService } from 'src/app/cars/service/car.service';
import { loadCars, loadCarsFailure, loadCarsSuccess } from './cars.actions';

import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable()
export class CarsEffects {

  loadCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCars),
      switchMap(() => this.carService.getCars().pipe(
        map(cars => loadCarsSuccess({cars})),
        catchError(() => of(loadCarsFailure()))
      ))
    )
  );


  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private carService: CarService // we will need this service for API calls
  ) {}
}