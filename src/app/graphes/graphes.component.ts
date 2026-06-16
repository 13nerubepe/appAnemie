import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  analyticsOutline,
  barChartOutline,
  pieChartOutline,
  podiumOutline
} from 'ionicons/icons';

import { Chart, registerables } from 'chart.js';
import {AnemieService} from "../service/anemie-service";

Chart.register(...registerables);

@Component({
  selector: 'app-graphes',
  templateUrl: './graphes.component.html',
  styleUrls: ['./graphes.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class GraphesComponent implements AfterViewInit {

  // private api = inject(AnemieService);
  private api = inject(AnemieService) as any;

  repartition: any[] = [];
  features: any[] = [];

  tranches: any[] = [];

  sexeRepartition: any[] = [];

  private donutChart?: Chart;
  private barChart?: Chart;
  private lineChart?: Chart;

  constructor() {
    addIcons({
      analyticsOutline,
      barChartOutline,
      pieChartOutline,
      podiumOutline
    });
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

    // =========================
    // DISTRIBUTION ANÉMIE
    // =========================
    this.api.getStatsAnemie().subscribe({
      next: (data: any) => {

        this.repartition = data.labels.map(
          (label: string, index: number) => ({
            label,
            pct: data.percent[index],
            color: data.colors[index]
          })
        );

        this.buildDonut();
      },
      error: (err: any) => {
        console.error('Erreur stats anémie', err);
      }
    });

    // =========================
    // IMPORTANCE VARIABLES
    // =========================
    this.api.getStatsFeatures().subscribe({
      next: (data: any) => {

        this.features = data;

        this.buildBar();
      },
      error: (err: any) => console.error('Erreur stats features', err)
    });


    // =========================
    // DASHBOARD
    // =========================
    this.api.getStatsDashboard().subscribe({
      next: (data: any) => {

        this.buildLine(data.total_consultations ?? 0);
      },
      error: (err: any) => console.error('Erreur dashboard', err)
    });
  }

  // =========================
  // BAR CHART
  // =========================
  private buildBar(): void {

    const canvas = this.getCanvas('barChart');

    if (!canvas) {
      return;
    }

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
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  // =========================
  // DONUT CHART
  // =========================
  private buildDonut(): void {

    const canvas = this.getCanvas('donutChart');

    if (!canvas) {
      return;
    }

    this.donutChart?.destroy();

    this.donutChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: this.repartition.map(r => r.label),
        datasets: [{
          data: this.repartition.map(r => r.pct),
          backgroundColor: this.repartition.map(r => r.color),
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // =========================
  // LINE CHART
  // =========================
  private buildLine(total: number): void {

    const canvas = this.getCanvas('lineChart');

    if (!canvas) {
      return;
    }

    this.lineChart?.destroy();

    const base = Math.max(total, 1);

    this.lineChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Consultations',
          data: [
            base * 0.20,
            base * 0.35,
            base * 0.50,
            base * 0.65,
            base * 0.80,
            base
          ],
          borderColor: '#1a237e',
          backgroundColor: 'rgba(26,35,126,0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Mois'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Volume'
            }
          }
        }
      }
    });
  }
}
