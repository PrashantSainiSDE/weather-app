import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  http = inject(HttpClient)

getWeather(city : string):Observable<Weather>{
  const apiUrl = environment.baseURL + `/weather?city=${city}`;
  return this.http.get<Weather>(apiUrl);
}

}
