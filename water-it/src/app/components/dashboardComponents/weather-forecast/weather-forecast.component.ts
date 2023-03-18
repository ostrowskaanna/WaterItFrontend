import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherApiConstants } from 'src/app/constants/weather-api.constants';
import { WeatherForecastDTO } from 'src/app/models/weather-forecast-dto.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weatherForecast$: Observable<WeatherForecastDTO> | undefined;
  city: string = "Krakow";
  numberOfDays: number = 5;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWeatherForecast();
    this.http.get<WeatherForecastDTO>(WeatherApiConstants.Url + this.city + "&days=" + this.numberOfDays).subscribe(x => console.log(x.forecast.forecastday))
  }

  getWeatherForecast(): void {
   this.weatherForecast$ = this.http.get<any>(WeatherApiConstants.Url + this.city + "&days=" + this.numberOfDays);
  }

}
