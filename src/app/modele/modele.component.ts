import {AfterViewInit, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  analyticsOutline, barChartOutline,
  gitBranchOutline,
  gridOutline,
  podiumOutline, statsChartOutline,
  trendingUpOutline
} from 'ionicons/icons';
import {Chart} from "chart.js";
import {AnemieService} from "../service/anemie-service";

@Component({
  selector: 'app-resul',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ModeleComponent implements AfterViewInit {

  private api = inject(AnemieService);

  features: any[] = [];

  private barChart?: Chart;

  constructor() {
    addIcons({ podiumOutline, barChartOutline, statsChartOutline });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadData();
    }, 300);
  }

  private getCanvas(id: string): HTMLCanvasElement | null {
    return document.getElementById(id) as HTMLCanvasElement;
  }

  private loadData(): void {
    // ── Importance des variables (Random Forest, fixe) ──
    this.api.getStatsFeatures().subscribe({
      next: (data: any) => {
        this.features = data;
        this.buildBar();
      },
      error: (err: any) => console.error('Erreur stats features', err)
    });
  }

  private buildBar(): void {
    const canvas = this.getCanvas('barChartEtude');
    if (!canvas) return;
    this.barChart?.destroy();
    this.barChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.features.map(f => f.name),
        datasets: [{
          data: this.features.map(f => f.pct),
          backgroundColor: '#3949ab',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true },
          y: { grid: { display: false } }
        }
      }
    });
  }

}
