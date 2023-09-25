import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  city: string = '';
  forecastData: any[] = [];
  iconURL='';

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.city = params['city'];
      this.getweatherforecast();
    });
  }
  getweatherforecast() {
    this.weatherService.getweatherforecast(this.city).pipe(
      pluck("list")
      ).subscribe(
      (data: any) => {
        for (let i = 0; i < data.length; i = i + 8) {
          
          this.forecastData.push(data[i]);
          // this.iconURL =
          // 'https://openweathermap.org/img/wn/' +
          // this.forecastData[i].weather[0].icon +
          // '@2x.png';
        }
        console.log(this.forecastData);
        
      },
      
      (error) => {
        console.error('Error fetching weather forecast:', error);
      }
    );
  }
}