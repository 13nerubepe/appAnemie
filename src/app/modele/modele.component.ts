import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  analyticsOutline,
  gitBranchOutline,
  gridOutline,
  podiumOutline,
  trendingUpOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-resul',
  templateUrl: './resul.component.html',
  styleUrls: ['./resul.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class RESULComponent {

  constructor() {
    addIcons({
      analyticsOutline,
      gridOutline,
      podiumOutline,
      trendingUpOutline,
      gitBranchOutline
    });
  }

  // =========================
  // MÉTRIQUES MODELES
  // =========================
  metriques: Array<{
    val: string;
    label: string;
    color: string;
  }> = [
    { val: '49.4%', label: 'Accuracy RF',   color: '#1a237e' },
    { val: '45.1%', label: 'F1 Macro RF',   color: '#2e7d32' },
    { val: '49.1%', label: 'Accuracy Ord.', color: '#e65100' },
    { val: '36.6%', label: 'F1 Macro Ord.', color: '#c62828' },
  ];

  // =========================
  // IMPORTANCE FEATURES
  // =========================
  features: Array<{
    name: string;
    pct: number;
    color: string;
  }> = [
    { name: 'Âge enfant (mois)',    pct: 28, color: '#1a237e' },
    { name: 'Z-score taille/âge',   pct: 18, color: '#283593' },
    { name: 'Z-score poids/taille', pct: 15, color: '#3949ab' },
    { name: 'Fièvre',               pct: 12, color: '#5c6bc0' },
    { name: 'Anémie mère',          pct: 10, color: '#7986cb' },
    { name: 'Indice richesse',       pct: 8,  color: '#9fa8da' },
    { name: 'Âge mère',             pct: 5,  color: '#c5cae9' },
    { name: 'BMI mère',             pct: 4,  color: '#e8eaf6' },
  ];

  // =========================
  // CLASSES ANÉMIE
  // =========================
  classes: Array<{
    label: string;
    n: number;
    pct: number;
    color: string;
  }> = [
    { label: 'Pas anémie',   n: 1695, pct: 42.5, color: '#2e7d32' },
    { label: 'Légère',       n: 1018, pct: 25.5, color: '#e65100' },
    { label: 'Mod./Sévère',  n: 1274, pct: 32.0, color: '#c62828' },
  ];

}
