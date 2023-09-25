import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  {
    path:'',
    component:WeatherComponent,
  },
  {
    path:'weather',
    component:WeatherComponent,
  },
  {
    path:'forecast/:city',
    component:ForecastComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
