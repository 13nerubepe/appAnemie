import { Component } from '@angular/core';

@Component({ selector: 'app-graphiques', templateUrl: './graphiques.page.html', styleUrls: ['./graphiques.page.scss'] })
export class GraphiquesPage {
  monthlyData = [
    { label:'Jan', val:22, height:55, color:'linear-gradient(180deg,#5b9fd4,#8ec5e0)' },
    { label:'Fév', val:28, height:70, color:'linear-gradient(180deg,#5b9fd4,#8ec5e0)' },
    { label:'Mar', val:18, height:45, color:'linear-gradient(180deg,#4aaa82,#7bbfa0)' },
    { label:'Avr', val:32, height:80, color:'linear-gradient(180deg,#e05a5a,#f09090)' },
    { label:'Mai', val:26, height:65, color:'linear-gradient(180deg,#e05a5a,#f09090)' },
    { label:'Juin',val:16, height:40, color:'linear-gradient(180deg,#4aaa82,#7bbfa0)' },
  ];
  repartition = [
    { label:'Anémie sévère', pct:35, color:'#e05a5a' },
    { label:'Modérée',       pct:20, color:'#f0a060' },
    { label:'Normal',        pct:45, color:'#4aaa82' },
  ];
  tranches = [
    { label:'0 – 12 mois',  pct:30 },
    { label:'12 – 24 mois', pct:45 },
    { label:'24 – 36 mois', pct:15 },
    { label:'36 – 60 mois', pct:10 },
  ];
}
