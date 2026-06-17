import {inject, Injectable} from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

import {
  AnemieStats,
  FeatureImportance,
  DashboardStats
} from '../models/State';

// =========================
// INPUT MODEL
// =========================
export interface PatientInput {
  sexe_enfant:        number;
  age_enfant_mois:    number;
  diarrhee:           number;
  fievre:             number;
  deparasitage:       number;
  type_allaitement:   number;

  age_mere:           number;
  anemie_mere:        number;
  niveau_instruction: number;

  indice_richesse:    number;
  milieu_residence:   number;
  region:             number;

  nom_praticien?:  string;
  structure_sante?: string;
  notes?:          string;
}

// =========================
// RESPONSE API
// =========================
export interface PredictionResult {
  id: number;

  random_forest: {
    prediction: number;
    label: string;
    probabilites: {
      classe_0: number;
      classe_1: number;
      classe_2: number;
    };
  };

  ordinal: {
    prediction: number;
    label: string;
    probabilites: {
      pas_anemie:    number;
      leger:         number;
      modere_severe: number;
    };
  };

  diagnostic_final: string;
}

// =========================
// HISTORIQUE
// =========================
export interface ConsultationHistorique {
  id:                 number;
  created_at:         string;

  sexe_enfant:        number;
  age_enfant_mois:    number;
  diarrhee:           number;
  fievre:             number;
  deparasitage:       number;
  type_allaitement:   number;

  age_mere:           number;
  anemie_mere:        number;
  niveau_instruction: number;

  indice_richesse:    number;
  milieu_residence:   number;
  region:             number;

  diagnostic_final:   string;
  label_rf:           string;

  nom_praticien:   string | null;
  structure_sante: string | null;
}

// =========================
// LISTE CONSULTATIONS
// =========================
export interface ListeConsultations {
  total: number;
  items: ConsultationHistorique[];
}

// =========================
// SERVICE
// =========================
@Injectable({
  providedIn: 'root',
})
export class AnemieService {

  private http = inject(HttpClient);
  private api  = environment.apiUrl;

  // ── PREDICTION ─────────────────────────
  predict(data: PatientInput): Observable<PredictionResult> {
    return this.http.post<PredictionResult>(
      `${this.api}/predict`,
      data
    );
  }

  // ── HEALTH ──────────────────────────────
  health(): Observable<any> {
    return this.http.get(`${this.api}/health`);
  }

  // ── HISTORIQUE ──────────────────────────
  getHistorique(skip = 0, limit = 50): Observable<ListeConsultations> {
    return this.http.get<ListeConsultations>(
      `${this.api}/consultations?skip=${skip}&limit=${limit}`
    );
  }

  getConsultation(id: number): Observable<ConsultationHistorique> {
    return this.http.get<ConsultationHistorique>(
      `${this.api}/consultations/${id}`
    );
  }

  supprimerConsultation(id: number): Observable<any> {
    return this.http.delete(`${this.api}/consultations/${id}`);
  }


  // ── SIMULATION ──────────────────────────
  simuler(): PredictionResult {

    const r    = Math.random();
    const pred = r < 0.425 ? 0 : r < 0.68 ? 1 : 2;

    const labels: { [key: number]: string } = {
      0: 'Pas anémie',
      1: 'Anémie légère',
      2: 'Anémie modérée/sévère'
    };

    const p0 = pred === 0 ? 0.6 + Math.random() * 0.3 : Math.random() * 0.2;
    const p1 = pred === 1 ? 0.6 + Math.random() * 0.3 : Math.random() * 0.2;
    const p2 = pred === 2 ? 0.6 + Math.random() * 0.3 : Math.random() * 0.2;

    return {
      id: 0,

      random_forest: {
        prediction: pred,
        label:      labels[pred],
        probabilites: {
          classe_0: +p0.toFixed(4),
          classe_1: +p1.toFixed(4),
          classe_2: +p2.toFixed(4),
        }
      },

      ordinal: {
        prediction: pred,
        label:      labels[pred],
        probabilites: {
          pas_anemie:    +p0.toFixed(4),
          leger:         +p1.toFixed(4),
          modere_severe: +p2.toFixed(4),
        }
      },

      diagnostic_final: labels[pred]
    };
  }



  // ── STATISTIQUES ──────────────────────────

  getStatsAnemie(): Observable<AnemieStats> {
    return this.http.get<AnemieStats>(
      `${this.api}/stats/anemie`
    );
  }

  getStatsFeatures(): Observable<FeatureImportance[]> {
    return this.http.get<FeatureImportance[]>(
      `${this.api}/stats/features`
    );
  }

  getStatsDashboard(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(
      `${this.api}/stats/dashboard`
    );
  }

  getStatsRegion(): Observable<any> {
    return this.http.get(`${this.api}/stats/anemie/region`);
  }

  getStatsAnemieSexe(): Observable<any> {
    return this.http.get(`${this.api}/stats/anemie-sexe`);
  }

  getStatsAge(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/stats/age`);
  }

}
