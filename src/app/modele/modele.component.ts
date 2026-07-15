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
  // sexe
  sexDistribution = [

    {
      name: "Garçons",
      count: 2010,
      pct: 50.4,
      color: "#2563eb"
    },

    {
      name: "Filles",
      count: 1977,
      pct: 49.6,
      color: "#ec4899"
    }

  ];

  // IMPORTANCES VARIABLES

  features = [
    { rank: 1, name: "Anémie de la mère", pct: 20.56, color: "#dc2626" },
    { rank: 2, name: "Indice de richesse", pct: 18.08, color: "#ea580c" },
    { rank: 3, name: "Fièvre", pct: 14.56, color: "#d97706" },
    { rank: 4, name: "Âge de l'enfant", pct: 8.98, color: "#ca8a04" },
    { rank: 5, name: "Instruction de la mère", pct: 7.57, color: "#65a30d" },
    { rank: 6, name: "Type d'allaitement", pct: 5.62, color: "#16a34a" },
    { rank: 7, name: "Milieu de résidence", pct: 4.59, color: "#0891b2" },
    { rank: 8, name: "Région", pct: 4.54, color: "#0284c7" },
    { rank: 9, name: "Déparasitage", pct: 4.33, color: "#2563eb" },
    { rank: 10, name: "Âge de la mère", pct: 4.23, color: "#7c3aed" },
    { rank: 11, name: "Sexe de l'enfant", pct: 4.22, color: "#9333ea" },
    { rank: 12, name: "Diarrhée", pct: 2.71, color: "#c026d3" }
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

  // features: any[] = [];

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

  // private loadData(): void {
  //   // ── Importance des variables (Random Forest, fixe) ──
  //   this.api.getStatsFeatures().subscribe({
  //     next: (data: any) => {
  //       this.features = data;
  //       this.buildBar();
  //     },
  //     error: (err: any) => console.error('Erreur stats features', err)
  //   });
  // }

  private loadData(): void {

    this.api.getStatsFeatures().subscribe({

      next: (data: any[]) => {

        console.log("Features reçues :", data);


        this.features = data.map((f:any, index:number)=>({

          rank: index + 1,

          name: f.name || f.feature || f.Features,

          pct: Number(f.pct || f.importance || f.Importance) *
            (Number(f.importance || f.Importance) < 1 ? 100 : 1),

          color: this.getColor(index)

        }));


        this.buildBar();

      },


      error: (err:any)=>{

        console.error(err);

        // garde les valeurs locales si API indisponible
        this.buildBar();

      }

    });

  }

  // GET COULEUR POUR CHAQUE BARRE EN FONCTION DU RANG

  private getColor(index:number){

    const colors=[

      '#dc2626',
      '#ea580c',
      '#d97706',
      '#ca8a04',
      '#65a30d',
      '#16a34a',
      '#0891b2',
      '#0284c7',
      '#2563eb',
      '#7c3aed',
      '#9333ea',
      '#c026d3'

    ];

    return colors[index % colors.length];

  }



  // private buildBar(): void {
  //   const canvas = this.getCanvas('barChartEtude');
  //   if (!canvas) return;
  //   this.barChart?.destroy();
  //   this.barChart = new Chart(canvas, {
  //     type: 'bar',
  //     data: {
  //       labels: this.features.map(f => f.name),
  //       datasets: [{
  //         data: this.features.map(f => f.pct),
  //         backgroundColor: '#3949ab',
  //         borderRadius: 6
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       indexAxis: 'y',
  //       plugins: { legend: { display: false } },
  //       scales: {
  //         x: { beginAtZero: true },
  //         y: { grid: { display: false } }
  //       }
  //     }
  //   });
  // }



  private buildBar(): void {

    const canvas = this.getCanvas('barChartEtude');

    if(!canvas) return;


    this.barChart?.destroy();


    this.barChart = new Chart(canvas, {

      type:'bar',

      data:{


        labels:this.features.map(f=>f.name),


        datasets:[{

          label:"Importance (%)",

          data:this.features.map(f=>f.pct),


          backgroundColor:this.features.map(f=>f.color),


          borderRadius:8

        }]

      },


      options:{


        responsive:true,
        maintainAspectRatio:false,

        indexAxis:'y',
        plugins:{
          legend:{
            display:false
          },
          tooltip:{
            callbacks:{
              label:(ctx:any)=>{

                return ctx.raw.toFixed(2)+" %";

              }

            }

          }

        },


        scales:{


          x:{

            beginAtZero:true,

            ticks:{

              callback:(value:any)=>value+" %"

            }

          },


          y:{

            grid:{
              display:false
            }

          }


        }


      }

    });


  }

}
