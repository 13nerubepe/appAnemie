import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: '',
    redirectTo: 'bienvenue',
    pathMatch: 'full',
  },

{
  path: 'bienvenue',
    loadComponent: () =>
  import('./authentification/bienvenue/bienvenue.component')
    .then(m => m.BienvenueComponent),
},
{
  path: 'dashboard',
    loadComponent: () =>
  import('./dashbord/dashbord.component')
    .then(m => m.DashbordComponent),
},
{
  path: 'patient',
    loadComponent: () =>
  import('./patient/patient.component')
    .then(m => m.PatientComponent),
},
{
  path: 'resultats',
    loadComponent: () =>
  import('./resultats/resultats.component')
    .then(m => m.ResultatsComponent),
},
{
  path: 'historique',
    loadComponent: () =>
  import('./historique/historique.component')
    .then(m => m.HistoriqueComponent),
},
{
  path: 'graphiques',
    loadComponent: () =>
  import('./graphes/graphes.component')
    .then(m => m.GraphesComponent),
},
{
  path: 'modele',
    loadComponent: () =>
  import('./modele/modele.component')
    .then(m => m.ModeleComponent),
},
{
  path: '**',
    redirectTo: 'bienvenue',
},

];
