import { Component } from '@angular/core';
import { MeteoComponent } from './meteo/meteo'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [CommonModule, MeteoComponent]
})
export class AppComponent {}
