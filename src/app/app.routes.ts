import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./authentification/login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashbord/dashbord.component').then((m) => m.DashbordComponent),
  },

  {
      path: 'patient',
    loadComponent: () =>
      import('./patient/patient.component').then((m) => m.PatientComponent),
  },

  {
    path: 'resultats',
    loadComponent: () =>
      import('./resultats/resultats.component').then((m) => m.ResultatsComponent),
  },

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },


];
