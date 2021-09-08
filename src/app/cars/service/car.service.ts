import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 cars: Car[] =[
   { model: 'W30',
     photo: 'https://autosdeprimera.com/v2/wp-content/uploads/2020/08/mercedes-amg-gt-2021-a.jpg',
     year: 2020,
     brand: 'Mercedes',
     price: 450,
     specifications: {
        horsePower: 5,
        electronicBrake: true,
        driveTrain: false,
        airbags: 4,
        surround: true,
        dimensions: "2x1.5x1"
    }
  },
   { model: 'Etron',
     photo: 'https://www.hibridosyelectricos.com/media/hibridos/images/2021/04/19/2021041918031397367.jpg',
     year: 2021,
     brand: 'Audi',
     price: 350,
     specifications: {
        horsePower: 4,
        electronicBrake: true,
        driveTrain: true,
        airbags: 6,
        surround: true,
        dimensions: "2.5x1.7x1.2"
    }
  },
  { model: 'GT1920',
     photo: 'https://www.motor.com.co/files/article_main/files/crop/uploads/2018/11/04/5bdf539177002.r_1541477164603.45-125-859-533.jpeg',
     year: 2020,
     brand: 'Mercedes',
     price: 600,
     specifications: {
        horsePower: 6,
        electronicBrake: true,
        driveTrain: true,
        airbags: 8,
        surround: false,
        dimensions: "1.8x2x1"
    }
  },
  { model: 'RSQ8',
  photo: 'https://www.elcarrocolombiano.com/wp-content/uploads/2020/05/20200507-Audi-RSQ8-Manhart-01AA.jpg',
  year: 2021,
  brand: 'Audi',
  price: 400,
  specifications: {
     horsePower: 3,
     electronicBrake: false,
     driveTrain: false,
     airbags: 7,
     surround: true,
     dimensions: "2.5x2x1.2"
 }
},
  { model: 'SUV',
  photo: 'https://www.motor.com.co/files/article_content/files/crop/uploads/2021/05/04/6091b0adaa160.r_1620160719251.281-165-1204-628.jpeg',
  year: 2021,
  brand: 'Fiat',
  price: 290,
  specifications: {
     horsePower: 4,
     electronicBrake: false,
     driveTrain: false,
     airbags: 4,
     surround: false,
     dimensions: "2.1x1.8x1.2"
 }
},
  { model: 'ateca',
  photo: 'https://awscdn.seat.co/media/Theme_Home_Slider_Child_ImageNormal_Component/14413-118956-146392-imageNormal/dh-818-ee2b8f/ea8a4518/1617656806/seat-ateca-banner-l-min.jpg',
  year: 2022,
  brand: 'Seat',
  price: 390,
  specifications: {
     horsePower: 6,
     electronicBrake: true,
     driveTrain: false,
     airbags: 8,
     surround: true,
     dimensions: "2.2x1.8x1.5"
 }
},
]
constructor() { }

getCars():Observable<Car[]>{
    return of(this.cars);
}

}
