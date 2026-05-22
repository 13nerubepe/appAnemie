import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resul',
  templateUrl: './resul.component.html',
  styleUrls: ['./resul.component.scss'],
})
export class RESULComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  activeTab = 'diagnostic';
  patient: any;
  resultat: any;
  severites = ['Normal', 'Modérée', 'Sévère'];

  biologie = [
    { label:'Hémoglobine', valeur:'9.2', unite:'g/dL',  statusClass:'bs-low',  statusIcon:'arrow-down-outline', statusLabel:'Faible' },
    { label:'Hématocrite', valeur:'28',  unite:'%',     statusClass:'bs-low',  statusIcon:'arrow-down-outline', statusLabel:'Faible' },
    { label:'VGM',         valeur:'72',  unite:'fL',    statusClass:'bs-low',  statusIcon:'arrow-down-outline', statusLabel:'Faible' },
    { label:'Fer sérique', valeur:'48',  unite:'µg/dL', statusClass:'bs-low',  statusIcon:'arrow-down-outline', statusLabel:'Faible' },
    { label:'TCMH',        valeur:'24',  unite:'pg',    statusClass:'bs-low',  statusIcon:'arrow-down-outline', statusLabel:'Faible' },
    { label:'Ferritine',   valeur:'12',  unite:'ng/mL', statusClass:'bs-low',  statusIcon:'arrow-down-outline', statusLabel:'Faible' },
    { label:'Poids',       valeur:'11.2',unite:'kg',    statusClass:'bs-ok',   statusIcon:'checkmark-outline',  statusLabel:'Normal' },
    { label:'Taille',      valeur:'85',  unite:'cm',    statusClass:'bs-ok',   statusIcon:'checkmark-outline',  statusLabel:'Normal' },
  ];

  recommandations = [
    { titre:'Supplémentation en fer', description:'3–6 mg/kg/jour de sulfate ferreux pendant 3 mois avec contrôle à J30.', icon:'bandage-outline', iconClass:'ri-red' },
    { titre:'Diversification alimentaire', description:'Augmenter les aliments riches en fer : viande, légumineuses, feuilles vertes.', icon:'nutrition-outline', iconClass:'ri-green' },
    { titre:'Vitamine C', description:'Associer des aliments riches en vitamine C pour améliorer l\'absorption du fer.', icon:'flask-outline', iconClass:'ri-blue' },
    { titre:'Prévention paludisme', description:'Traitement préventif intermittent et utilisation de moustiquaires imprégnées.', icon:'shield-checkmark-outline', iconClass:'ri-amber' },
    { titre:'Suivi à 30 jours', description:'Contrôle de l\'hémoglobine après 30 jours de traitement.', icon:'calendar-outline', iconClass:'ri-violet' },
  ];

  featuresIA = [
    { name:'Hémoglobine', pct:92, color:'linear-gradient(90deg,#e05a5a,#f09090)', textColor:'#c04040' },
    { name:'Hématocrite', pct:78, color:'linear-gradient(90deg,#e05a5a,#f09090)', textColor:'#c04040' },
    { name:'Fer sérique', pct:65, color:'linear-gradient(90deg,#f0a060,#f4c090)', textColor:'#b07030' },
    { name:'VGM',         pct:54, color:'linear-gradient(90deg,#5b9fd4,#8ec5e0)', textColor:'#3a80b0' },
    { name:'Paludisme',   pct:41, color:'linear-gradient(90deg,#7040b0,#a080d0)', textColor:'#7040b0' },
    { name:'Alimentation',pct:33, color:'linear-gradient(90deg,#4aaa82,#7bbfa0)', textColor:'#3a8a62' },
  ];

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.patient = nav?.extras?.state?.['patient'];
  }

  ngOnInit() {
    // Résultat simulé — remplace par ton appel APIg
    this.resultat = {
      diagnostic: 'Anémie Modérée',
      confiance: 91,
      niveau: 1, // 0=Normal, 1=Modérée, 2=Sévère
      interpretation: 'Le faible taux d\'hémoglobine (9.2 g/dL) est le facteur déterminant. Combiné à un fer sérique bas et une absence de supplémentation, le modèle conclut à une anémie ferriprive modérée.',
    };
  }

  getBannerClass() {
    const n = this.resultat?.niveau;
    return { 'banner-normal': n===0, 'banner-modere': n===1, 'banner-anemie': n===2 };
  }

  getDotClass(i: number) {
    const n = this.resultat?.niveau;
    if (i === 0) return n >= 0 ? 'dot-green' : '';
    if (i === 1) return n >= 1 ? (n >= 2 ? 'dot-red' : 'dot-amber') : '';
    if (i === 2) return n >= 2 ? 'dot-red' : '';
    return '';
  }

  imprimer()          { console.log('Impression'); }
  ajouterSuivi()      { console.log('Suivi ajouté'); }
  genererOrdonnance() { console.log('Ordonnance générée'); }
  partager()          { console.log('Partage'); }

}
