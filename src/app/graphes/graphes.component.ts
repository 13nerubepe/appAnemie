import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  analyticsOutline,
  pieChartOutline,
  maleFemaleOutline,
  mapOutline,
  trendingUpOutline
} from 'ionicons/icons';

import { Chart, registerables } from 'chart.js';
import { AnemieService } from '../service/anemie-service';

Chart.register(...registerables);

@Component({
  selector: 'app-graphes-usage',
  templateUrl: './graphes.component.html',
  styleUrls: ['./graphes.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class GraphesComponent implements AfterViewInit {

  private api = inject(AnemieService);

  repartition:     any[] = [];
  ageStats:        any[] = [];
  regionStats:     any[] = [];
  sexeRepartition: any[] = [];
  totalConsultations = 0;

  private donutChart?:  Chart;
  private lineChart?:   Chart;
  private ageChart?:    Chart;
  private regionChart?: Chart;
  private sexDonut?:    Chart;

  constructor() {
    addIcons({
      analyticsOutline,
      pieChartOutline,
      maleFemaleOutline,
      mapOutline,
      trendingUpOutline
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

    // ── Distribution anémie (consultations réelles) ───
    this.api.getStatsAnemie().subscribe({
      next: (data: any) => {
        this.repartition = data.labels.map(
          (label: string, index: number) => ({
            label,
            pct:   data.percent[index],
            color: data.colors[index]
          })
        );
        this.buildDonut();
      },
      error: (err: any) => console.error('Erreur stats anémie', err)
    });

    // ── Dashboard global ────────────────────────────────
    this.api.getStatsDashboard().subscribe({
      next: (data: any) => {
        this.totalConsultations = data.total_consultations ?? 0;
        this.buildLine(data);
      },
      error: (err: any) => console.error('Erreur dashboard', err)
    });

    // ── Anémie par tranche d'âge (consultations réelles) ─
    this.api.getStatsAge().subscribe({
      next: (data: any) => {
        this.ageStats = data;
        this.buildAge();
      },
      error: (err: any) => console.error('Erreur stats âge', err)
    });

    // ── Anémie par région (consultations réelles) ───────
    this.api.getStatsRegion().subscribe({
      next: (data: any) => {
        this.regionStats = data;
        this.buildRegion();
      },
      error: (err: any) => console.error('Erreur stats région', err)
    });

    // ── Anémie par sexe (consultations réelles) ──────────
    this.api.getStatsAnemieSexe().subscribe({
      next: (data: any) => {
        this.sexeRepartition = data.labels.map(
          (label: string, index: number) => ({
            label,
            pct:   data.percent[index],
            color: data.colors[index]
          })
        );
        this.buildSexe();
      },
      error: (err: any) => console.error('Erreur stats sexe', err)
    });
  }

  private buildDonut(): void {
    const canvas = this.getCanvas('donutChartUsage');
    if (!canvas) return;
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
      options: { responsive: true, cutout: '65%', plugins: { legend: { position: 'bottom' } } }
    });
  }

  private buildSexe(): void {
    const canvas = this.getCanvas('sexDonut');
    if (!canvas) return;
    this.sexDonut?.destroy();
    this.sexDonut = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: this.sexeRepartition.map(s => s.label),
        datasets: [{
          data: this.sexeRepartition.map(s => s.pct),
          backgroundColor: this.sexeRepartition.map(s => s.color),
          borderWidth: 0
        }]
      },
      options: { responsive: true, cutout: '65%', plugins: { legend: { position: 'bottom' } } }
    });
  }

  private buildLine(data: any): void {
    const canvas = this.getCanvas('lineChartUsage');
    if (!canvas) return;
    this.lineChart?.destroy();
    const anemie = data?.anemie ?? { '0': 0, '1': 0, '2': 0 };
    this.lineChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Pas anémie', 'Légère', 'Modérée/Sévère'],
        datasets: [{
          label: 'Nombre de consultations',
          data: [anemie['0'], anemie['1'], anemie['2']],
          backgroundColor: ['#2e7d32', '#e65100', '#c62828'],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'Statut anémique' } },
          y: { beginAtZero: true, title: { display: true, text: 'Nombre de consultations' } }
        }
      }
    });
  }

  private buildAge(): void {
    const canvas = this.getCanvas('ageChartUsage');
    if (!canvas) return;
    this.ageChart?.destroy();
    this.ageChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.ageStats.map(a => a.label + ' mois'),
        datasets: [{
          label: 'Niveau moyen anémie (%)',
          data: this.ageStats.map(a => a.pct),
          backgroundColor: '#7986cb',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'Tranche d\'âge' } },
          y: { beginAtZero: true, title: { display: true, text: '% niveau moyen' } }
        }
      }
    });
  }

  private buildRegion(): void {
    const canvas = this.getCanvas('regionChartUsage');
    if (!canvas) return;
    this.regionChart?.destroy();
    this.regionChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.regionStats.map(r => 'Région ' + r.region),
        datasets: [{
          label: 'Niveau moyen anémie (%)',
          data: this.regionStats.map(r => r.pct),
          backgroundColor: '#c62828',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, title: { display: true, text: '% niveau moyen' } },
          y: { grid: { display: false } }
        }
      }
    });
  }
}
