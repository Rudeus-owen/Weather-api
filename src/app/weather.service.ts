import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getweather(city:string){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=312f41594ba036f67f73f9f2ce1e1466&units=metric")
  }

  getweatherforecast(city:string){
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=312f41594ba036f67f73f9f2ce1e1466&units=metric")
  }
}
