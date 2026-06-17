import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonContent, IonButtons,
  IonBackButton, IonInput, IonSelect, IonSelectOption,
  IonIcon, IonSpinner
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personCircleOutline, pulseOutline,
  analyticsOutline, personAddOutline,
  homeOutline, medicalOutline
} from 'ionicons/icons';
import { AnemieService } from '../service/anemie-service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonContent, IonButtons,
    IonBackButton, IonInput, IonSelect, IonSelectOption,
    IonIcon, IonSpinner,
  ],
})
export class PatientComponent {

  loading   = false;
  errorMsg  = '';

  patient = {
    prenom: '',
    nom:    '',

    sexe_enfant:        null as number | null,
    age_enfant_mois:    null as number | null,

    diarrhee:           null as number | null,
    fievre:             null as number | null,
    deparasitage:       null as number | null,
    type_allaitement:   null as number | null,

    age_mere:           null as number | null,
    anemie_mere:        null as number | null,
    niveau_instruction: null as number | null,

    indice_richesse:    null as number | null,
    milieu_residence:   null as number | null,
    region:             null as number | null,

    structure_sante: '',
    notes:           '',
  };

  constructor(
    private router: Router,
    private anemieService: AnemieService
  ) {
    addIcons({
      personCircleOutline, pulseOutline,
      analyticsOutline, personAddOutline,
      homeOutline, medicalOutline
    });
  }

  setSexe(v: number)         { this.patient.sexe_enfant      = v; }
  setDiarrhee(v: number)     { this.patient.diarrhee         = v; }
  setFievre(v: number)       { this.patient.fievre           = v; }
  setDeparasitage(v: number) { this.patient.deparasitage     = v; }
  setMilieu(v: number)       { this.patient.milieu_residence = v; }

  valide(): boolean {
    const p = this.patient;
    return (
      p.sexe_enfant        !== null &&
      p.age_enfant_mois    !== null &&
      p.diarrhee           !== null &&
      p.fievre             !== null &&
      p.deparasitage       !== null &&
      p.type_allaitement   !== null &&
      p.age_mere           !== null &&
      p.anemie_mere        !== null &&
      p.niveau_instruction !== null &&
      p.indice_richesse    !== null &&
      p.milieu_residence   !== null &&
      p.region             !== null
    );
  }

  onSubmit() {
    if (!this.valide() || this.loading) return;
    this.loading  = true;
    this.errorMsg = '';

    const payload = {
      sexe_enfant:        this.patient.sexe_enfant!,
      age_enfant_mois:    this.patient.age_enfant_mois!,
      diarrhee:           this.patient.diarrhee!,
      fievre:             this.patient.fievre!,
      deparasitage:       this.patient.deparasitage!,
      type_allaitement:   this.patient.type_allaitement!,
      age_mere:           this.patient.age_mere!,
      anemie_mere:        this.patient.anemie_mere!,
      niveau_instruction: this.patient.niveau_instruction!,
      indice_richesse:    this.patient.indice_richesse!,
      milieu_residence:   this.patient.milieu_residence!,
      region:             this.patient.region!,
      nom_praticien:   (this.patient.prenom + ' ' + this.patient.nom).trim() || undefined,
      structure_sante: this.patient.structure_sante || undefined,
      notes:           this.patient.notes           || undefined,
    };

    this.anemieService.predict(payload).subscribe({
      next: (resultat) => {
        this.loading = false;
        this.router.navigate(['/resultats'], {
          state: { patient: this.patient, resultat, simule: false }
        });
      },
      error: (err) => {
        this.loading  = false;
        this.errorMsg = 'Impossible de contacter le serveur. Vérifiez votre connexion.';
        console.error('Erreur API /predict', err);
      }
    });
  }

  // ── Mode démo explicite, choisi par l'utilisateur ─────
  lancerSimulation() {
    const resultat = this.anemieService.simuler();
    this.router.navigate(['/resultats'], {
      state: { patient: this.patient, resultat, simule: true }
    });
  }
}
