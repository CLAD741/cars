import { createReducer, on, select } from "@ngrx/store";
import { filterList, loadCarsSuccess, selectCar, unselectCar } from "./cars.actions";

const initialState = {selected:{},cars:[], filteredCars:[]};

const _CarReducer = createReducer(
    initialState,
    on(loadCarsSuccess,(state, {cars})=>({
      cars: cars,
      selected:{},
      filteredCars:cars
    })),
    on(selectCar,(state, {car})=>({
      cars: [...state.cars],
      selected: car,
      filteredCars:[]
    })),
    on(unselectCar, (state)=>({
      cars: [...state.cars],
      selected: {},
      filteredCars:[]
    })),
    on(filterList, (state, {text}) => ({
      cars: [...state.cars],
      selected:{...state.selected},
      filteredCars: [...state.cars.filter(car => car.brand.toLowerCase().includes(text.toLowerCase())),],
    }))
);

export function carReducer(state, action){
    return _CarReducer(state,action);
}