import { WeatherCondition } from "./weather-condition.model";

export interface WeatherDay {
    avghumidity: number,
    avgtemp_c: number,
    daily_chance_of_rain: number,
    totalprecip_mm: number,
    condition: WeatherCondition
}