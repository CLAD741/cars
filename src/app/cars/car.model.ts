export interface Car {

  model: string,
  photo: string,
  year: number,
  brand: string,
  price: number,
  specifications: {
    horsePower: number,
    electronicBrake: boolean,
    driveTrain: boolean,
    airbags: number,
    surround: boolean,
    dimensions: string
  }
}
