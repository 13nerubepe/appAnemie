import { Component, OnInit } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon, IonLabel, IonTabBar, IonTabButton, IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {
  analyticsOutline, arrowForwardOutline,
  barChartOutline,
  chevronForwardOutline,
  heartOutline,
  logOutOutline,
  personAddOutline, shieldCheckmarkOutline,
  timeOutline
} from "ionicons/icons";
import {addIcons} from "ionicons";
import {Router} from "@angular/router";
import {AnemieService, ConsultationHistorique} from "../service/anemie-service";
import {CommonModule, NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonBackButton,

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
    IonLabel,
    NgClass
  ]
})
export class DashbordComponent implements OnInit {

  stats = { total: 0, anemie: 0, normal: 0 };
  consultations: ConsultationHistorique[] = [];

  actions = [
    { label: 'Prediction patient',  desc: 'Saisir les variables et lancer la prédiction IA', icon: 'person-add-outline', path: '/patient',    cls: 'blue'   },
    { label: 'Historique',       desc: 'Consulter les analyses précédentes',               icon: 'time-outline',       path: '/historique', cls: 'green'  },
    { label: 'Graphiques',       desc: 'Facteurs d\'influence de l\'anémie',               icon: 'bar-chart-outline',  path: '/graphiques', cls: 'amber'  },
    { label: 'Modèles IA',       desc: 'Performances Random Forest · Régression Ordinale', icon: 'analytics-outline',  path: '/modele',     cls: 'purple' },
  ];

  constructor(private router: Router, private anemieService: AnemieService) {
    addIcons({ heartOutline, personAddOutline, timeOutline,
      barChartOutline, analyticsOutline, logOutOutline, chevronForwardOutline });
  }

  ngOnInit() {
    this.anemieService.getHistorique().subscribe(data => {
      this.consultations    = data.items;
      this.stats.total      = data.total;
      this.stats.anemie     = data.items.filter(x => x.diagnostic_final !== 'Pas anémie').length;
      this.stats.normal     = data.items.filter(x => x.diagnostic_final === 'Pas anémie').length;
    });
  }

  go(path: string) { this.router.navigate([path]); }
  logout()         { this.router.navigate(['/bienvenue']); }

}
