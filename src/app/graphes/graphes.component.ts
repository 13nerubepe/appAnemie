import {AfterViewInit, Component} from '@angular/core';
import {addIcons} from "ionicons";
import {analyticsOutline, barChartOutline, pieChartOutline, podiumOutline} from "ionicons/icons";
import {Chart, registerables} from "chart.js";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

Chart.register(...registerables);

@Component({
  selector: 'app-graphes',
  templateUrl: './graphes.component.html',
  styleUrls: ['./graphes.component.scss'],
  imports: [
    CommonModule,
    IonicModule
  ],
  standalone: true
})
export class GraphesComponent  implements AfterViewInit {

  // @ViewChild('barRef')   barRef!:   ElementRef;
  // @ViewChild('donutRef') donutRef!: ElementRef;
  // @ViewChild('lineRef')  lineRef!:  ElementRef;


  repartition = [
    { label: 'Pas anémie',    pct: 42.5, color: '#2e7d32' },
    { label: 'Légère',        pct: 25.5, color: '#e65100' },
    { label: 'Mod./Sévère',  pct: 32.0, color: '#c62828' },
  ];

  tranches = [
    { label: '6-11 mois',  pct: 68 },
    { label: '12-23 mois', pct: 62 },
    { label: '24-35 mois', pct: 55 },
    { label: '36-47 mois', pct: 48 },
    { label: '48-59 mois', pct: 42 },
  ];

  features = [
    { name: 'Âge enfant (mois)',    pct: 28, color: '#1a237e' },
    { name: 'Z-score taille/âge',   pct: 18, color: '#283593' },
    { name: 'Z-score poids/taille', pct: 15, color: '#3949ab' },
    { name: 'Fièvre',               pct: 12, color: '#5c6bc0' },
    { name: 'Anémie mère',          pct: 10, color: '#7986cb' },
    { name: 'Indice richesse',       pct: 8,  color: '#9fa8da' },
    { name: 'Âge mère',             pct: 5,  color: '#c5cae9' },
    { name: 'BMI mère',             pct: 4,  color: '#e8eaf6' },
  ];

  constructor() {
    addIcons({ barChartOutline, pieChartOutline, analyticsOutline, podiumOutline });
  }

  ngAfterViewInit() {
    // Délai pour laisser le DOM se charger
    setTimeout(() => {
      this.buildBar();
      this.buildDonut();
      this.buildLine();
    }, 300);
  }

  private getCanvas(id: string): HTMLCanvasElement | null {
    return document.getElementById(id) as HTMLCanvasElement;
  }

  buildBar() {
    const canvas = this.getCanvas('barChart');
    if (!canvas) { console.warn('barChart canvas not found'); return; }
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.features.map(f => f.name),
        datasets: [{
          data:            this.features.map(f => f.pct),
          backgroundColor: this.features.map(f => f.color),
          borderRadius:    6,
        }]
      },
      options: {
        indexAxis: 'y' as const,
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, max: 32 },
          y: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    } as any);
  }


  buildDonut() {
    const canvas = this.getCanvas('donutChart');
    if (!canvas) { console.warn('donutChart canvas not found'); return; }
    new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: this.repartition.map(r => r.label),
        datasets: [{
          data:            this.repartition.map(r => r.pct),
          backgroundColor: this.repartition.map(r => r.color),
          borderWidth:     0,
        }]
      },
      options: {
        responsive: true,
        cutout: '65%',
        plugins: { legend: { position: 'bottom' } }
      }
    } as any);
  }

  buildLine() {
    const canvas = this.getCanvas('lineChart');
    if (!canvas) { console.warn('lineChart canvas not found'); return; }
    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['6','12','18','24','30','36','42','48','54','60'],
        datasets: [
          {
            label:           'Anémiques',
            data:            [8.2, 8.8, 9.1, 9.4, 9.8, 10.0, 10.2, 10.4, 10.5, 10.6],
            borderColor:     '#c62828',
            backgroundColor: 'rgba(198,40,40,0.08)',
            fill: true, tension: 0.4,
          },
          {
            label:           'Non anémiques',
            data:            [11.2, 11.5, 11.8, 12.0, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7],
            borderColor:     '#2e7d32',
            backgroundColor: 'rgba(46,125,50,0.08)',
            fill: true, tension: 0.4,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } },
        scales: {
          x: { title: { display: true, text: 'Âge (mois)' } },
          y: { title: { display: true, text: 'Hémoglobine (g/dL)' } }
        }
      }
    } as any);
  }

}
