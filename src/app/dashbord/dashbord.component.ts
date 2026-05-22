import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon, IonLabel, IonTabBar, IonTabButton, IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {barChartOutline, chevronForwardOutline, logOutOutline, personAddOutline, timeOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
  imports: [
    IonCardContent,
    IonCard,
    IonIcon,
    IonContent,
    IonHeader,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonButton,
    IonTabBar,
    IonTabButton,
    IonLabel
  ]
})
export class DashbordComponent  implements OnInit {

  username = 'Utilisateur';
  totalConsultations = 0;
  casAnemie = 0;
  casNormaux = 0;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private router: Router) {
    addIcons({ logOutOutline, personAddOutline, timeOutline,
      barChartOutline, chevronForwardOutline });
  }

  ngOnInit() {
    // TODO: charger les stats depuis un service
    this.totalConsultations = 24;
    this.casAnemie = 9;
    this.casNormaux = 15;
  }

  navigate(path: string) {
    this.router.navigate([path]).then(r => console.log('Navigation:', r));
  }

  logout() {
    this.router.navigate(['/login']).then(r => console.log('Logout:', r));
  }

}
