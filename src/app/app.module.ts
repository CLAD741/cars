import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './appRouting.module';
import { CarsModule } from './cars/cars.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { carReducer } from './store/cars/cars.reducer';
import { CarsEffects } from './store/cars/cars.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsModule,
    StoreModule.forRoot({car: carReducer}),
    EffectsModule.forRoot([CarsEffects]),
    StoreDevtoolsModule.instrument({
       maxAge:25,
       logOnly: environment.production,
       autoPause:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
