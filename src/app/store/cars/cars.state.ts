import { Car } from "src/app/cars/car.model";

export interface CarState {
  cars: Car[];
  selected: Car | null;
  filteredCars: Car[];
}
