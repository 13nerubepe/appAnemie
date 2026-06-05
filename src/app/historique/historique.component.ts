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
import { FormsModule } from "@angular/forms";
import { CommonModule, DatePipe, NgClass } from "@angular/common";
import { Router } from "@angular/router";
import { downloadOutline, personOutline, searchOutline, timeOutline, trashOutline } from "ionicons/icons";
import { addIcons } from "ionicons";
import { AnemieService, ConsultationHistorique } from "../service/anemie-service";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
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
    NgClass
  ]
})
export class HistoriqueComponent implements OnInit {

  searchText   = '';
  activeFilter = 'tous';
  tous:    ConsultationHistorique[] = [];
  filtres: ConsultationHistorique[] = [];
  chargement = false;

  constructor(private router: Router, private anemieService: AnemieService) {
    addIcons({ timeOutline, searchOutline, downloadOutline, trashOutline, personOutline });
  }

  ngOnInit() {
    this.chargerHistorique();
  }

  chargerHistorique() {
    this.chargement = true;
    this.anemieService.getHistorique().subscribe({
      next: (data) => {
        this.tous       = data.items;
        this.chargement = false;
        this.filtrer();
      },
      error: () => {
        this.chargement = false;
      }
    });
  }

  filtrer() {
    let liste = [...this.tous];

    if (this.searchText.trim()) {
      const q = this.searchText.toLowerCase();
      liste = liste.filter(h =>
        h.diagnostic_final.toLowerCase().includes(q) ||
        (h.nom_praticien   || '').toLowerCase().includes(q) ||
        (h.structure_sante || '').toLowerCase().includes(q)
      );
    }

    if (this.activeFilter === 'normal') {
      liste = liste.filter(h => h.diagnostic_final === 'Pas anémie');
    } else if (this.activeFilter === 'anemie') {
      liste = liste.filter(h => h.diagnostic_final !== 'Pas anémie');
    } else if (this.activeFilter === 'severe') {
      liste = liste.filter(h => h.diagnostic_final === 'Anémie modérée/sévère');
    } else if (this.activeFilter === 'mois') {
      const debut = new Date(); debut.setDate(1);
      liste = liste.filter(h => new Date(h.created_at) >= debut);
    }

    this.filtres = liste;
  }

  setFilter(f: string) { this.activeFilter = f; this.filtrer(); }
  onSearch()           { this.filtrer(); }

  voirDetail(h: ConsultationHistorique) {
    this.router.navigate(['/resultats'], { state: { consultation: h } });
  }

  supprimer(h: ConsultationHistorique, event: Event) {
    event.stopPropagation();
    this.anemieService.supprimerConsultation(h.id).subscribe(() => {
      this.chargerHistorique();
    });
  }

  exporter() {
    const json = JSON.stringify(this.tous, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'imas_historique.json'; a.click();
  }

  getCls(h: ConsultationHistorique): string {
    if (h.diagnostic_final === 'Pas anémie')    return 's';
    if (h.diagnostic_final === 'Anémie légère') return 'w';
    return 'd';
  }

  getBadgeCls(h: ConsultationHistorique): string {
    return this.getCls(h);
  }

  getLabel(h: ConsultationHistorique): string {
    return h.label_rf || h.diagnostic_final || 'N/A';
  }

  getConf(h: ConsultationHistorique): number {
    return 0;
  }

  getInitiales(h: ConsultationHistorique): string {
    const p = h.nom_praticien || '';
    return p.length >= 2 ? p.substring(0, 2).toUpperCase() : '?';
  }
}
