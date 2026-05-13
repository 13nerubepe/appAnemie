import { Component, OnInit } from '@angular/core';
import {
  IonBackButton,
  IonButton, IonButtons, IonContent, IonHeader,
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
    IonContent
  ]
})
export class PatientComponent  implements OnInit {
  loading = false;

  patient = {
    age: null,
    sexe: '',
    poids: null,
    taille: null,
    region: '',
    eau: '',
    education_mere: '',
    paludisme: '',
    alimentation: null,
    allaitement: ''
  };

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private router: Router) {}

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  analyser() {
    this.loading = true;

    // TODO: appeler l'API ML ici
    setTimeout(() => {
      this.loading = false;
      // Naviguer vers la page résultats avec les données
      this.router.navigate(['/resultats'], {
        state: { patient: this.patient, resultat: null }
      });
    }, 1500);
  }

}
