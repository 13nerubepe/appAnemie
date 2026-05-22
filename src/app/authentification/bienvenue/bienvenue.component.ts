import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {addIcons} from "ionicons";
import {arrowForwardOutline, heartOutline, shieldCheckmarkOutline} from "ionicons/icons";
import {IonButton, IonContent, IonIcon} from "@ionic/angular/standalone";

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.scss'],
  imports: [
    IonButton,
    IonIcon,
    IonContent
  ]
})
export class BienvenueComponent {

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private router: Router) {
    addIcons({ heartOutline, arrowForwardOutline, shieldCheckmarkOutline });
  }

  continuer() {
    this.router.navigate(['/dashboard']);
  }

}
