import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CarState } from "./cars.state";

export const selectFeature = createFeatureSelector('car');
 
export const selectCarsFeature = createSelector(
  selectFeature,
  (state:CarState) => {
    return state.cars
  }
);
export const selectCarFeature = createSelector(
  selectFeature,
  (state:CarState) => {
    return state.selected
  }
);
export const selectFilterFeature = createSelector(
  selectFeature,
  (state:CarState) => {
    return state.filteredCars
  }
);