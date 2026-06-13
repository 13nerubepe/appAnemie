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
  personCircleOutline, waterOutline, pulseOutline,
  analyticsOutline, personAddOutline, homeOutline
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

  loading = false;

  patient = {
    // Infos affichage
    prenom:              '',
    nom:                 '',

    // Clinique enfant
    diarrhee:           null as number | null,
    fievre:             null as number | null,
    deparasitage:       null as number | null,
    type_allaitement:   null as number | null,

    // Mère
    age_mere:           null as number | null,
    anemie_mere:        null as number | null,
    niveau_instruction: null as number | null,

    // Ménage
    indice_richesse:    null as number | null,
    milieu_residence:   null as number | null,
    region:             null as number | null,  // ← manquait

    // Variables saisies
    age_enfant_mois:     null as number | null,
    sexe_enfant:         null as number | null,
    poids:               null as number | null,
    taille:              null as number | null,

    // Praticien (optionnel)
    nom_praticien:      '',
    structure_sante:    '',
    notes:              '',
    // bmi_poids_mere:      null as number | null,
    // bmi_taille_mere:     null as number | null,
    // Variables calculées automatiquement
    // zscore_taille_age:   null as number | null,
    // zscore_poids_taille: null as number | null,
    // BMI:                 null as number | null,
    // Variables saisies directement


  };

  constructor(
    private router: Router,
    private anemieService: AnemieService
  ) {
    addIcons({
      personCircleOutline, waterOutline, pulseOutline,
      analyticsOutline, personAddOutline, homeOutline
    });
  }

  // ── Setters radio buttons ─────────────────────────────
  setSexe(v: number)     { this.patient.sexe_enfant      = v; this.calculerZScores(); }
  setDiarrhee(v: number) { this.patient.diarrhee         = v; }
  setFievre(v: number)   { this.patient.fievre           = v; }
  setMilieu(v: number)   { this.patient.milieu_residence = v; }
  setDeparasitage(v: number)   { this.patient.deparasitage = v; }


  // ── Calcul Z-scores OMS ───────────────────────────────
  calculerZScores() {
    const age    = this.patient.age_enfant_mois;
    const poids  = this.patient.poids;
    const taille = this.patient.taille;
    const sexe   = this.patient.sexe_enfant;
    if (!age || !poids || !taille || sexe === null) return;
    // this.patient.zscore_taille_age   = this.calcHAZ(age, taille, sexe);
    // this.patient.zscore_poids_taille = this.calcWHZ(poids, taille, sexe);
  }

  calcHAZ(age: number, taille: number, sexe: number): number {
    const ref = this.getRefHAZ(age, sexe);
    return Math.round(((taille - ref.median) / ref.sd) * 100) / 100;
  }

  calcWHZ(poids: number, taille: number, sexe: number): number {
    const ref = this.getRefWHZ(taille, sexe);
    return Math.round(((poids - ref.median) / ref.sd) * 100) / 100;
  }

  getRefHAZ(age: number, sexe: number): { median: number; sd: number } {
    const g: Record<number, { median: number; sd: number }> = {
      6:  { median: 67.6,  sd: 2.5 },
      9:  { median: 72.3,  sd: 2.6 },
      12: { median: 75.7,  sd: 2.6 },
      18: { median: 82.3,  sd: 2.7 },
      24: { median: 87.8,  sd: 3.1 },
      30: { median: 92.7,  sd: 3.3 },
      36: { median: 96.1,  sd: 3.6 },
      42: { median: 99.9,  sd: 3.8 },
      48: { median: 103.3, sd: 4.0 },
      54: { median: 106.4, sd: 4.2 },
      59: { median: 108.2, sd: 4.3 },
    };
    const f: Record<number, { median: number; sd: number }> = {
      6:  { median: 65.7,  sd: 2.5 },
      9:  { median: 70.1,  sd: 2.6 },
      12: { median: 74.0,  sd: 2.7 },
      18: { median: 80.7,  sd: 2.8 },
      24: { median: 86.4,  sd: 3.2 },
      30: { median: 91.2,  sd: 3.4 },
      36: { median: 95.1,  sd: 3.6 },
      42: { median: 98.7,  sd: 3.8 },
      48: { median: 102.7, sd: 4.0 },
      54: { median: 105.9, sd: 4.2 },
      59: { median: 107.5, sd: 4.3 },
    };
    const table = sexe === 1 ? g : f;
    const keys  = Object.keys(table).map(Number);
    const closest = keys.reduce((a, b) =>
      Math.abs(b - age) < Math.abs(a - age) ? b : a
    );
    return table[closest];
  }

  getRefWHZ(taille: number, sexe: number): { median: number; sd: number } {
    const g: Record<number, { median: number; sd: number }> = {
      65:  { median: 7.4,  sd: 0.8 },
      70:  { median: 8.2,  sd: 0.9 },
      75:  { median: 9.1,  sd: 1.0 },
      80:  { median: 10.1, sd: 1.1 },
      85:  { median: 11.3, sd: 1.2 },
      90:  { median: 12.6, sd: 1.4 },
      95:  { median: 14.1, sd: 1.6 },
      100: { median: 15.7, sd: 1.8 },
      105: { median: 17.5, sd: 2.1 },
      110: { median: 19.5, sd: 2.4 },
    };
    const f: Record<number, { median: number; sd: number }> = {
      65:  { median: 7.2,  sd: 0.8 },
      70:  { median: 8.0,  sd: 0.9 },
      75:  { median: 8.9,  sd: 1.0 },
      80:  { median: 9.9,  sd: 1.1 },
      85:  { median: 11.0, sd: 1.2 },
      90:  { median: 12.4, sd: 1.4 },
      95:  { median: 13.9, sd: 1.6 },
      100: { median: 15.5, sd: 1.8 },
      105: { median: 17.2, sd: 2.1 },
      110: { median: 19.2, sd: 2.4 },
    };
    const table = sexe === 1 ? g : f;
    const keys  = Object.keys(table).map(Number);
    const closest = keys.reduce((a, b) =>
      Math.abs(b - taille) < Math.abs(a - taille) ? b : a
    );
    return table[closest];
  }

  // // ── Calcul IMC mère ───────────────────────────────────
  // calculerBMI() {
  //   const p = this.patient.bmi_poids_mere;
  //   const t = this.patient.bmi_taille_mere;
  //   if (p && t) {
  //     const tm = t / 100;
  //     this.patient.BMI = Math.round((p / (tm * tm)) * 10) / 10;
  //   }
  // }

  // ── Helpers affichage ─────────────────────────────────
  getZClass(z: number): string {
    if (z < -3) return 'z-severe';
    if (z < -2) return 'z-modere';
    if (z < -1) return 'z-leger';
    return 'z-normal';
  }

  getZLabel(z: number): string {
    if (z < -3) return 'Malnutrition sévère';
    if (z < -2) return 'Malnutrition modérée';
    if (z < -1) return 'Risque nutritionnel';
    return 'Normal';
  }

  getBMIClass(bmi: number): string {
    if (bmi < 18.5) return 'bmi-low';
    if (bmi < 25)   return 'bmi-normal';
    if (bmi < 30)   return 'bmi-high';
    return 'bmi-obese';
  }

  getBMILabel(bmi: number): string {
    if (bmi < 18.5) return 'Insuffisance pondérale';
    if (bmi < 25)   return 'Normal';
    if (bmi < 30)   return 'Surpoids';
    return 'Obésité';
  }

  // ── Validation ────────────────────────────────────────
  valide(): boolean {
    return (
      this.patient.sexe_enfant        !== null &&
      this.patient.age_enfant_mois    !== null &&
      this.patient.diarrhee           !== null &&
      this.patient.fievre             !== null &&
      this.patient.deparasitage       !== null &&
      this.patient.type_allaitement   !== null &&
      this.patient.age_mere           !== null &&
      this.patient.anemie_mere        !== null &&
      this.patient.niveau_instruction !== null &&
      this.patient.indice_richesse    !== null &&
      this.patient.milieu_residence   !== null &&
      this.patient.region             !== null   // ← manquait
    );
  }

  // ── Soumission → API ──────────────────────────────────
  onSubmit() {
    if (!this.valide() || this.loading) return;
    this.loading = true;


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
      structure_sante:    this.patient.structure_sante || undefined,
      notes:              this.patient.notes           || undefined,
      nom_praticien: (this.patient.prenom + ' ' + this.patient.nom).trim() || undefined,
    };

    this.anemieService.predict(payload).subscribe({
      next: (resultat) => {
        this.loading = false;
        //  Sauvegarde automatique en BDD via POST /predict — rien à faire ici
        this.router.navigate(['/resultats'], {
          state: { patient: this.patient, resultat }
        });
      },
      error: () => {
        this.loading = false;
        // Mode simulation si API indisponible
        const resultat = this.anemieService.simuler();
        this.router.navigate(['/resultats'], {
          state: { patient: this.patient, resultat }
        });
      }
    });
  }
}
