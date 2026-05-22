import { Component, OnInit } from '@angular/core';
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonToolbar} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss'],
  imports: [
    IonIcon,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonButton,
    IonContent,
    IonInput,
    FormsModule,
    NgClass
  ]
})
export class HistoriqueComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
