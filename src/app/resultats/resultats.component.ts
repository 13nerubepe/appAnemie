import { Component, OnInit } from '@angular/core';
import {
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonList,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {NgClass} from "@angular/common";
import {addIcons} from "ionicons";
import {Router} from "@angular/router";
import {
  alertCircleOutline,
  checkmarkCircleOutline,
  chevronForwardCircleOutline,
  ellipseOutline,
  removeCircleOutline, warningOutline
} from "ionicons/icons";

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss'],
  imports: [
    IonHeader,
    IonButtons,
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonContent,
    IonIcon,
    NgClass,
    IonList,
    IonLabel,
    IonItem,
    IonButton
  ]
})
export class ResultatsComponent  implements OnInit {

  patient: any = {};
  resultat: any = {
    anemique: false,
    hemoglobine: 11.5,
    niveau: 'Normal',
    recommandations: []
  };

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private router: Router) {
    addIcons({
      warningOutline, checkmarkCircleOutline, chevronForwardCircleOutline,
      alertCircleOutline, removeCircleOutline, ellipseOutline
    });
  }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state || history.state;

    if (state?.patient) {
      this.patient  = state.patient;
      this.resultat = state.resultat ?? this.simulerResultat();
    }
  }

  // Simulation en attendant l'API ML
  simulerResultat() {
    const hemo = parseFloat((Math.random() * 8 + 7).toFixed(1));
    const anemique = hemo < 11;

    let niveau = 'Normal';
    let recommandations: string[] = [];

    if (hemo < 7) {
      niveau = 'Anémie sévère';
      recommandations = [
        'Référer immédiatement vers un centre de santé.',
        'Transfusion sanguine à envisager.',
        'Supplémenter en fer et acide folique.'
      ];
    } else if (hemo < 9) {
      niveau = 'Anémie modérée';
      recommandations = [
        'Supplémenter en fer pendant 3 mois.',
        'Améliorer la diversité alimentaire.',
        'Traiter les infections parasitaires si présentes.'
      ];
    } else if (hemo < 11) {
      niveau = 'Anémie légère';
      recommandations = [
        'Encourager la consommation d\'aliments riches en fer.',
        'Suivi nutritionnel mensuel recommandé.',
        'Vérifier les antécédents de paludisme.'
      ];
    } else {
      niveau = 'Normal';
      recommandations = [
        'Maintenir une alimentation équilibrée.',
        'Suivi de routine tous les 6 mois.',
        'Continuer l\'allaitement si applicable.'
      ];
    }

    return { anemique, hemoglobine: hemo, niveau, recommandations };
  }

  getHemoPercent(): number {
    return Math.min((this.resultat.hemoglobine / 20) * 100, 100);
  }

  getHemoClass(): string {
    const h = this.resultat.hemoglobine;
    if (h < 7)  return 'danger';
    if (h < 11) return 'warning';
    return 'success';
  }

  getNiveauClass(): string {
    const n = this.resultat.niveau;
    if (n.includes('sévère'))  return 'severe';
    if (n.includes('modérée')) return 'modere';
    if (n.includes('légère'))  return 'leger';
    return 'normal';
  }

  getNiveauIcon(): string {
    const n = this.resultat.niveau;
    if (n.includes('sévère'))  return 'alert-circle-outline';
    if (n.includes('modérée')) return 'warning-outline';
    if (n.includes('légère'))  return 'remove-circle-outline';
    return 'ellipse-outline';
  }

  nouvelleAnalyse() {
    this.router.navigate(['/formulaire']);
  }

  voirGraphiques() {
    this.router.navigate(['/graphiques']);
  }

}
