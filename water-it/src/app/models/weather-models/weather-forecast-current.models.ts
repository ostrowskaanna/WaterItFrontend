import { WeatherCondition } from "./weather-condition.model";

export interface WeatherForecastCurrent {
    cloud: number,
    condition: WeatherCondition,
    feelslike_c: number,
    humidity: number,
    precip_mm: number,
    temp_c: number,
    wind_kph: number
}