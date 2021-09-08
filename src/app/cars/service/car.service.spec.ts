/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Service/carService } from './service/car.service';

describe('Service: Service/car', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service/carService]
    });
  });

  it('should ...', inject([Service/carService], (service: Service/carService) => {
    expect(service).toBeTruthy();
  }));
});
