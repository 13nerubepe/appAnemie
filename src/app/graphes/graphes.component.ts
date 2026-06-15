import { AfterViewInit, Component, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  analyticsOutline,
  barChartOutline,
  pieChartOutline,
  podiumOutline
} from 'ionicons/icons';

import { Chart, registerables } from 'chart.js';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AnemieService } from '../services/anemie.service';

Chart.register(...registerables);

@Component({
  selector: 'app-graphes',
  templateUrl: './graphes.component.html',
  styleUrls: ['./graphes.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class GraphesComponent implements AfterViewInit {

  private api = inject(AnemieService);

  repartition: any[] = [];
  features: any[] = [];

  constructor() {
    addIcons({ barChartOutline, pieChartOutline, analyticsOutline, podiumOutline });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadData();
    }, 300);
  }

  // =========================
  //  LOAD BACKEND DATA
  // =========================
  loadData() {

    // 1️ DONUT + BAR DATA (anémie distribution)
    fetch(`${this.api['api']}/stats/anemie`)
      .then(res => res.json())
      .then((data: any) => {

        this.repartition = data.labels.map((l: string, i: number) => ({
          label: l,
          pct: data.percent[i],
          color: data.colors[i]
        }));

        this.buildDonut();
      });

    // voir a la maison

    fetch(`${this.api['api']}/stats/anemie`)
      .then(res => res.json() as Promise<any>)
      .then((data) => {

        this.repartition = data.labels.map((l: string, i: number) => ({
          label: l,
          pct: data.percent[i],
          color: data.colors[i]
        }));

        this.buildDonut();
      });

    // 2️ BAR (features importance)
    fetch(`${this.api['api']}/stats/features`)
      .then(res => res.json())
      .then((data: any) => {

        this.features = data;
        this.buildBar();
      });

    // 3️ LINE (dashboard stats)
    fetch(`${this.api['api']}/stats/dashboard`)
      .then(res => res.json())
      .then((data: any) => {

        this.buildLine(data.total_consultations);
      });

  }

  private getCanvas(id: string): HTMLCanvasElement | null {
    return document.getElementById(id) as HTMLCanvasElement;
  }

  // =========================
  //  BAR CHART (FEATURE IMPORTANCE)
  // =========================
  buildBar() {

    const canvas = this.getCanvas('barChart');
    if (!canvas) return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.features.map(f => f.name),
        datasets: [{
          data: this.features.map(f => f.pct),
          backgroundColor: this.features.map(f => '#3949ab'),
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true },
          y: { grid: { display: false } }
        }
      }
    } as any);
  }

  // =========================
  //  DONUT CHART (ANEMIE)
  // =========================
  buildDonut() {

    const canvas = this.getCanvas('donutChart');
    if (!canvas) return;

    new Chart(canvas, {
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
        cutout: '65%',
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    } as any);
  }

  // =========================
  //  LINE CHART (EVOLUTION)
  // =========================
  buildLine(total: number) {

    const canvas = this.getCanvas('lineChart');
    if (!canvas) return;

    const base = Math.max(total, 1);

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun'],
        datasets: [
          {
            label: 'Consultations',
            data: [
              base * 0.2,
              base * 0.35,
              base * 0.5,
              base * 0.65,
              base * 0.8,
              base
            ],
            borderColor: '#1a237e',
            backgroundColor: 'rgba(26,35,126,0.1)',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } },
        scales: {
          x: { title: { display: true, text: 'Mois' } },
          y: { title: { display: true, text: 'Volume' } }
        }
      }
    } as any);
  }
}
