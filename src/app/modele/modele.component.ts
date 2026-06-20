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

  // Distribution des classes (anémie)
  classDistribution = [
    { name: 'Pas anémie',    count: 1695, pct: 42.5, color: '#2e7d32' }, // vert
    { name: 'Légère',        count: 1018, pct: 25.5, color: '#e07b00' }, // orange
    { name: 'Mod./Sévère',   count: 1274, pct: 32.0, color: '#c62828' }, // rouge
  ];

  totalObservations = this.classDistribution.reduce((sum, c) => sum + c.count, 0);

  // Segments pré-calculés pour le donut SVG (rayon = 50 → circonférence ≈ 314.159)
  donutSegments = this.buildDonutSegments();

  private buildDonutSegments() {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    let cumulativePct = 0;

    return this.classDistribution.map((c) => {
      const dashLength = (c.pct / 100) * circumference;
      const dash = `${dashLength} ${circumference - dashLength}`;
      const offset = circumference - (cumulativePct / 100) * circumference;
      cumulativePct += c.pct;
      return { color: c.color, dash, offset };
    });
  }

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
