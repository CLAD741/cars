import { createAction, props } from "@ngrx/store";
import { Car } from "src/app/cars/car.model";

export const loadCars = createAction('[Cars] Load Cars');
export const loadCarsSuccess = createAction('[Cars] Load Cars Success', props<{cars:Car[]}>());
export const loadCarsFailure = createAction('[Cars] Load Cars Failure');


export const selectCar = createAction('[Car] Select Car', props<{car:Car}>());
export const unselectCar = createAction('[Car] Unselect Car');