import { createReducer, on } from "@ngrx/store";
import { loadCarsSuccess, selectCar, unselectCar } from "./cars.actions";

const initialState = {selected:{},cars:[]};

const _CarReducer = createReducer(
    initialState,
    on(loadCarsSuccess,(state, {cars})=>({
      cars: cars,
      selected:{}
    })),
    on(selectCar,(state, {car})=>({
      cars: [...state.cars],
      selected: car
    })),
    on(unselectCar, (state)=>({
      cars: [...state.cars],
      selected: {}
    }))
);

export function carReducer(state, action){
    return _CarReducer(state,action);
}