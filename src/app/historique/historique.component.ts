import { Component, OnInit } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonToolbar
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {CommonModule, DatePipe, NgClass} from "@angular/common";
import {Router} from "@angular/router";
import {downloadOutline, personOutline, searchOutline, timeOutline, trashOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {AnemieService} from "../service/anemie-service";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss'],
  standalone: true,
  imports: [
    CommonModule,     // ← *ngFor, *ngIf, pipes
    FormsModule,
    IonBackButton,
    IonIcon,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonButton,
    IonContent,
    DatePipe,
    IonInput,
    FormsModule,
    NgClass
  ]
})
export class HistoriqueComponent  implements OnInit {

  searchText   = '';
  activeFilter = 'tous';
  tous:     any[] = [];
  filtres:  any[] = [];

  constructor(private router: Router, private anemieService: AnemieService) {
    addIcons({ timeOutline, searchOutline, downloadOutline,
      trashOutline, personOutline });
  }

  ngOnInit() {
    this.tous = this.anemieService.getHistorique();
    this.filtrer();
  }

  filtrer() {
    let liste = [...this.tous];

    if (this.searchText.trim()) {
      const q = this.searchText.toLowerCase();
      liste = liste.filter(h =>
        `${h.patient?.prenom} ${h.patient?.nom}`.toLowerCase().includes(q)
      );
    }

    if (this.activeFilter === 'normal') {
      liste = liste.filter(h => h.resultat?.random_forest?.prediction === 0);
    } else if (this.activeFilter === 'anemie') {
      liste = liste.filter(h => h.resultat?.random_forest?.prediction > 0);
    } else if (this.activeFilter === 'severe') {
      liste = liste.filter(h => h.resultat?.random_forest?.prediction === 2);
    } else if (this.activeFilter === 'mois') {
      const debut = new Date(); debut.setDate(1);
      liste = liste.filter(h => new Date(h.date) >= debut);
    }

    this.filtres = liste;
  }

  setFilter(f: string) { this.activeFilter = f; this.filtrer(); }
  onSearch()           { this.filtrer(); }

  voirDetail(h: any) {
    this.router.navigate(['/resultats'], {
      state: { patient: h.patient, resultat: h.resultat }
    });
  }

  supprimer(h: any, event: Event) {
    event.stopPropagation();
    this.anemieService.supprimerHistorique(h.id);
    this.tous = this.anemieService.getHistorique();
    this.filtrer();
  }

  exporter() {
    const json = JSON.stringify(this.tous, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'imas_historique.json'; a.click();
  }

  getCls(h: any): string {
    const p = h.resultat?.random_forest?.prediction;
    return p === 0 ? 's' : p === 1 ? 'w' : 'd';
  }

  getBadgeCls(h: any): string {
    const p = h.resultat?.random_forest?.prediction;
    return p === 0 ? 's' : p === 1 ? 'w' : 'd';
  }

  getLabel(h: any): string {
    return h.resultat?.random_forest?.label || 'N/A';
  }

  getConf(h: any): number {
    const p = h.resultat?.random_forest?.probabilites;
    if (!p) return 0;
    return Math.round(Math.max(p.pas_anemie, p.leger, p.modere_severe) * 100);
  }

  getInitiales(h: any): string {
    const prenom = h.patient?.prenom || '';
    const nom    = h.patient?.nom    || '';
    return ((prenom[0] || '') + (nom[0] || '')).toUpperCase() || '?';
  }
}
