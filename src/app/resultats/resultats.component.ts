import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonContent,
  IonBackButton, IonButtons, IonButton, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  hardwareChipOutline, pulseOutline, statsChartOutline,
  gitBranchOutline, trendingUpOutline, clipboardOutline,
  analyticsOutline, bulbOutline, shareOutline,
  addCircleOutline, barChartOutline, checkmarkCircleOutline,
  alertCircleOutline, calendarOutline, medicalOutline,
  nutritionOutline, heartOutline, documentTextOutline,
  warningOutline, timeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonContent,
    IonBackButton, IonButtons, IonButton, IonIcon,
  ],
})
export class ResultatsComponent implements OnInit {

  private router = inject(Router);

  activeTab = 'diagnostic';
  today     = new Date();
  patient:  any = {};
  resultat: any = {};
  simule    = false;

  severites = ['Pas anémie', 'Légère', 'Mod./Sév.'];
  recommandations: any[] = [];

  featuresIA = [
    { name: 'Âge enfant (mois)',     pct: 25, color: '#1a237e' },
    { name: 'Âge mère',              pct: 21, color: '#283593' },
    { name: 'Région',                pct: 13, color: '#3949ab' },
    { name: 'Indice richesse',        pct: 8,  color: '#5c6bc0' },
    { name: 'Niveau instruction',     pct: 6,  color: '#7986cb' },
    { name: 'Anémie mère',           pct: 5,  color: '#9fa8da' },
    { name: 'Sexe enfant',           pct: 5,  color: '#c5cae9' },
    { name: 'Déparasitage',          pct: 4,  color: '#bbdefb' },
    { name: 'Type allaitement',      pct: 4,  color: '#b3e5fc' },
    { name: 'Fièvre',                pct: 3,  color: '#e1f5fe' },
    { name: 'Milieu résidence',      pct: 3,  color: '#e8eaf6' },
    { name: 'Diarrhée',              pct: 3,  color: '#ede7f6' },
  ];

  constructor() {
    addIcons({
      hardwareChipOutline, pulseOutline, statsChartOutline,
      gitBranchOutline, trendingUpOutline, clipboardOutline,
      analyticsOutline, bulbOutline, shareOutline,
      addCircleOutline, barChartOutline, checkmarkCircleOutline,
      alertCircleOutline, calendarOutline, medicalOutline,
      nutritionOutline, heartOutline, documentTextOutline,
      warningOutline, timeOutline
    });
  }

  ngOnInit() {
    const state = history.state;
    if (state?.patient)  this.patient  = state.patient;
    if (state?.resultat) this.resultat = state.resultat;
    if (state?.simule)   this.simule   = state.simule;
    this.genererRecos();
  }

  getNiveau(): number {
    return this.resultat?.random_forest?.prediction ?? 0;
  }

  getBannerClass(): string {
    const n = this.getNiveau();
    if (n === 0) return 'success';
    if (n === 1) return 'warning';
    return 'danger';
  }

  getDotClass(i: number): string {
    const n = this.getNiveau();
    if (i === n) return 'active';
    if (i < n)   return 'done';
    return 'pending';
  }

  getConfiance(): number {
    const p = this.resultat?.random_forest?.probabilites;
    if (!p) return 0;
    return Math.round(
      Math.max(p.classe_0, p.classe_1, p.classe_2) * 100
    );
  }

  getProbasRF() {
    const p = this.resultat?.random_forest?.probabilites;
    if (!p) return [];
    return [
      { label: 'Pas anémie',   pct: Math.round(p.classe_0 * 100), color: '#2e7d32' },
      { label: 'Légère',       pct: Math.round(p.classe_1 * 100), color: '#e65100' },
      { label: 'Mod./Sévère', pct: Math.round(p.classe_2 * 100), color: '#c62828' },
    ];
  }

  getProbasOrd() {
    const p = this.resultat?.ordinal?.probabilites;
    if (!p) return [];
    return [
      { label: 'Pas anémie',   pct: Math.round(p.pas_anemie    * 100), color: '#2e7d32' },
      { label: 'Légère',       pct: Math.round(p.leger          * 100), color: '#e65100' },
      { label: 'Mod./Sévère', pct: Math.round(p.modere_severe  * 100), color: '#c62828' },
    ];
  }

  getAccordClass(): string {
    return this.resultat?.random_forest?.prediction ===
    this.resultat?.ordinal?.prediction
      ? 'accord-ok' : 'accord-diff';
  }

  getAccordMsg(): string {
    const ok = this.resultat?.random_forest?.prediction ===
      this.resultat?.ordinal?.prediction;
    return ok
      ? 'Les deux modèles sont en accord'
      : 'Les modèles divergent — interprétation clinique recommandée';
  }

  getAccordIcon(): string {
    return this.resultat?.random_forest?.prediction ===
    this.resultat?.ordinal?.prediction
      ? 'checkmark-circle-outline'
      : 'alert-circle-outline';
  }

  getInterpretation(): string {
    const n = this.getNiveau();
    if (n === 0) return 'Les facteurs analysés indiquent un statut non anémique. L\'âge de l\'enfant et le bon statut nutritionnel maternel contribuent positivement.';
    if (n === 1) return 'Anémie légère détectée. L\'âge de l\'enfant, le statut anémique maternel et l\'indice de richesse sont les principaux facteurs contributifs.';
    return 'Anémie modérée à sévère. La fièvre, l\'anémie maternelle et les inégalités socio-économiques sont des facteurs aggravants. Prise en charge immédiate recommandée.';
  }

  getFacteursRisque() {
    const patient = this.patient;
    const facteurs = [];

    if (patient.anemie_mere > 0)
      facteurs.push({ label: 'Anémie maternelle', or: 1.50, type: 'risque' });
    if (patient.fievre === 1)
      facteurs.push({ label: 'Fièvre', or: 1.31, type: 'risque' });
    if (patient.type_allaitement > 0)
      facteurs.push({ label: 'Type allaitement', or: 1.10, type: 'risque' });
    if (patient.deparasitage === 1)
      facteurs.push({ label: 'Déparasitage', or: 0.90, type: 'protecteur' });
    if (patient.niveau_instruction > 1)
      facteurs.push({ label: 'Niveau instruction', or: 0.88, type: 'protecteur' });
    if (patient.indice_richesse > 3)
      facteurs.push({ label: 'Indice richesse', or: 0.84, type: 'protecteur' });

    return facteurs;
  }

  genererRecos() {
    const n = this.getNiveau();
    if (n === 0) {
      this.recommandations = [
        { titre: 'Suivi régulier',          desc: 'Contrôle nutritionnel tous les 6 mois.',          icon: 'calendar-outline',      cls: 'green' },
        { titre: 'Alimentation équilibrée', desc: 'Maintenir une diversité alimentaire suffisante.', icon: 'nutrition-outline',     cls: 'green' },
        { titre: 'Allaitement maternel',    desc: 'Continuer l\'allaitement si applicable.',         icon: 'heart-outline',         cls: 'green' },
      ];
    } else if (n === 1) {
      this.recommandations = [
        { titre: 'Supplémentation fer',  desc: 'Supplémenter en fer pendant 3 mois.',               icon: 'medical-outline',       cls: 'orange' },
        { titre: 'Alimentation riche',   desc: 'Aliments riches en fer : viande, légumineuses.',    icon: 'nutrition-outline',     cls: 'orange' },
        { titre: 'Suivi mensuel',        desc: 'Contrôle hémoglobine dans 1 mois.',                 icon: 'calendar-outline',      cls: 'orange' },
        { titre: 'Traiter infections',   desc: 'Vérifier et traiter les infections parasitaires.',  icon: 'pulse-outline',         cls: 'orange' },
      ];
    } else {
      this.recommandations = [
        { titre: 'Référence urgente',    desc: 'Référer immédiatement vers un centre de santé.',    icon: 'warning-outline',       cls: 'red' },
        { titre: 'Bilan biologique',     desc: 'Hémogramme complet et bilan martial.',              icon: 'document-text-outline', cls: 'red' },
        { titre: 'Traitement intensif',  desc: 'Transfusion ou traitement médical à envisager.',   icon: 'medical-outline',       cls: 'red' },
        { titre: 'Suivi rapproché',      desc: 'Contrôle dans 2 semaines après traitement.',        icon: 'calendar-outline',      cls: 'red' },
      ];
    }
  }

  nouvelleAnalyse() { this.router.navigate(['/patient']);    }
  voirGraphiques()  { this.router.navigate(['/graphiques']); }
  voirHistorique()  { this.router.navigate(['/historique']); }
}
