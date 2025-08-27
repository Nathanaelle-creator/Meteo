import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class MeteoService {
private apiKey = '9332e6cf8bad81609c0bfbf09cdf4532';
private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

constructor(private http: HttpClient) {}

getMeteo(city: string): Observable<any> {
return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=fr`);
}
}
