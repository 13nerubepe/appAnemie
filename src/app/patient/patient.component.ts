import { Component, OnInit } from '@angular/core';
import {
  IonBackButton,
  IonButton, IonButtons, IonContent, IonHeader, IonIcon,
  IonInput,
  IonItem,
  IonLabel, IonList,
  IonSelect,
  IonSelectOption,
  IonSpinner, IonTitle, IonToolbar
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  imports: [
    IonButton,
    IonSpinner,
    IonSelectOption,
    IonLabel,
    IonSelect,
    IonItem,
    IonInput,
    FormsModule,
    IonList,
    IonHeader,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonContent,
    IonIcon
  ]
})
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

@Component({ selector: 'app-formulaire', templateUrl: './formulaire.page.html', styleUrls: ['./formulaire.page.scss'] })
export class FormulaireePage {
  loading = false;
  patient = {
    prenom: '', nom: '', age: null, sexe: 'M', region: '',
    hemoglobine: null, hematocrite: null, vgm: null,
    fer: null, tcmh: null, ferritine: null,
    poids: null, taille: null, alimentation: '',
    paludisme: false, supplementation: false, vaccine: true
  };

  constructor(
    // private router: Router
  ) {}

  async onSubmit() {
    this.loading = true;
    // Appel API modèle IA ici
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/resultat'], { state: { patient: this.patient } });
    }, 2000);
  }
}
