import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  humidity: number = 0;
  wind: number = 0;
  description: string = "";
  city: string = 'Mandalay'; // Default city
  iconURL: string = '';

  constructor(private weatherservice: WeatherService,private router:Router) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
  }

  searchWeather() {
    this.getWeatherData(this.city);
  }

  private getWeatherData(city: string) {
    this.weatherservice.getweather(city).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.humidity = this.myWeather.main.humidity;
        this.wind = this.myWeather.wind.speed;
        this.description = this.myWeather.weather[0].description;
        this.iconURL =
          'https://openweathermap.org/img/wn/' +
          this.myWeather.weather[0].icon +
          '@2x.png';

          this.myWeather = true
          // this.navigateToWeatherForecast(this.city);
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      },
      
    });
  }
  private navigateToWeatherForecast(city: string) {
   
    this.router.navigate(['/forecast', city]);
  }
}

