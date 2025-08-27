import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // Pour *ngIf
import { FormsModule } from '@angular/forms';     // Pour ngModel
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.html',
  styleUrls: ['./meteo.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [MeteoService],
})
export class MeteoComponent {
  ville = '';
  meteo: any;

  constructor(private meteoService: MeteoService) {}

  rechercher() {
    if (!this.ville) return;
    this.meteoService.getMeteo(this.ville).subscribe({
      next: (data) => (this.meteo = data),
      error: () => alert('Ville non trouvée ou erreur API'),
    });
  }
}
