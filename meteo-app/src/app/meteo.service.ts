import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment.prod';


@Injectable({
providedIn: 'root'
})
export class MeteoService {
private apiKey = environment.openWeatherApiKey;
private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

constructor(private http: HttpClient) {}

getMeteo(city: string): Observable<any> {
return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=fr`);
}
}
