import { WeatherDay } from "./weather-day.model";

export interface WeatherForecastDay {
    astro: string,
    date: string,
    day: WeatherDay
}