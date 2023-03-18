import { WeatherForecastCurrent } from "./weather-forecast-current.models";
import { WeatherForecast } from "./weather-forecast.model";

export interface WeatherForecastDTO {
    current: WeatherForecastCurrent,
    forecast: WeatherForecast
}