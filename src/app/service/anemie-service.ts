import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";



export interface PatientInput {
  age_enfant_mois:     number;
  zscore_taille_age:   number;
  zscore_poids_taille: number;
  diarrhee:            number;
  fievre:              number;
  anemie_mere:         number;
  milieu_residence:    number;
  indice_richesse:     number;
  niveau_instruction:  number;
  age_mere:            number;
  BMI:                 number;

  // Champs optionnels
  nom_praticien?:   string;
  structure_sante?: string;
  notes?:           string;
}

export interface PredictionResult {
  id: number;  // ← ID retourné par la BDD
  random_forest: {
    prediction:   number;
    label:        string;
    probabilites: {
      pas_anemie:    number;
      leger:         number;
      modere_severe: number;
    };
  };
  ordinal: {
    prediction:   number;
    label:        string;
    probabilites: {
      pas_anemie:    number;
      leger:         number;
      modere_severe: number;
    };
  };
  diagnostic_final: string;
}

export interface ConsultationHistorique {
  id:                  number;
  created_at:          string;
  age_enfant_mois:     number;
  zscore_taille_age:   number;
  zscore_poids_taille: number;
  diarrhee:            number;
  fievre:              number;
  anemie_mere:         number;
  milieu_residence:    number;
  indice_richesse:     number;
  niveau_instruction:  number;
  age_mere:            number;
  bmi:                 number;
  diagnostic_final:    string;
  label_rf:            string;
  nom_praticien:       string | null;
  structure_sante:     string | null;
}

export interface ListeConsultations {
  total: number;
  items: ConsultationHistorique[];
}

@Injectable({
  providedIn: 'root',
})

export class AnemieService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ── Prédiction + sauvegarde automatique en BDD ───────
  predict(data: PatientInput): Observable<PredictionResult> {
    return this.http.post<PredictionResult>(`${this.api}/predict`, data);
  }

  health(): Observable<any> {
    return this.http.get(`${this.api}/health`);
  }

  // ── Historique depuis la BDD ─────────────────────────
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

  // ── Simulation si API non disponible ─────────────────
  simuler(): PredictionResult {
    const r    = Math.random();
    const pred = r < 0.42 ? 0 : r < 0.68 ? 1 : 2;
    const labels: any = {
      0: 'Pas anémie', 1: 'Anémie légère', 2: 'Anémie modérée/sévère'
    };
    const p0 = pred === 0 ? 0.6 + Math.random() * 0.3 : Math.random() * 0.2;
    const p1 = pred === 1 ? 0.5 + Math.random() * 0.3 : Math.random() * 0.2;
    const p2 = pred === 2 ? 0.5 + Math.random() * 0.3 : Math.random() * 0.2;
    return {
      id: 0,  // ID fictif en mode simulation
      random_forest: {
        prediction: pred, label: labels[pred],
        probabilites: {
          pas_anemie:    +p0.toFixed(4),
          leger:         +p1.toFixed(4),
          modere_severe: +p2.toFixed(4),
        }
      },
      ordinal: {
        prediction: pred, label: labels[pred],
        probabilites: {
          pas_anemie:    +p0.toFixed(4),
          leger:         +p1.toFixed(4),
          modere_severe: +p2.toFixed(4),
        }
      },
      diagnostic_final: labels[pred]
    };
  }


  // ── Historique local ─────────────────────────────────
  // sauvegarderHistorique(patient: any, resultat: PredictionResult) {
  //   const entree = {
  //     id:      Date.now(),
  //     date:    new Date().toISOString(),
  //     patient,
  //     resultat,
  //   };
  //   const historique = this.getHistorique();
  //   historique.unshift(entree);
  //   localStorage.setItem('imas_historique', JSON.stringify(historique));
  //   return entree;
  // }

  // getHistorique(): any[] {
  //   return JSON.parse(localStorage.getItem('imas_historique') || '[]');
  // }

  // supprimerHistorique(id: number) {
  //   const historique = this.getHistorique().filter(h => h.id !== id);
  //   localStorage.setItem('imas_historique', JSON.stringify(historique));
  // }

  // ── Simulation si API non disponible ─────────────────
  // simuler(): PredictionResult {
  //   const r    = Math.random();
  //   const pred = r < 0.42 ? 0 : r < 0.68 ? 1 : 2;
  //   const labels: any = {
  //     0: 'Pas anémie', 1: 'Anémie légère', 2: 'Anémie modérée/sévère'
  //   };
  //   const p0 = pred === 0 ? 0.6 + Math.random() * 0.3 : Math.random() * 0.2;
  //   const p1 = pred === 1 ? 0.5 + Math.random() * 0.3 : Math.random() * 0.2;
  //   const p2 = pred === 2 ? 0.5 + Math.random() * 0.3 : Math.random() * 0.2;
  //   return {
  //     random_forest: {
  //       prediction: pred, label: labels[pred],
  //       probabilites: {
  //         pas_anemie:    +p0.toFixed(4),
  //         leger:         +p1.toFixed(4),
  //         modere_severe: +p2.toFixed(4),
  //       }
  //     },
  //     ordinal: {
  //       prediction: pred, label: labels[pred],
  //       probabilites: {
  //         pas_anemie:    +p0.toFixed(4),
  //         leger:         +p1.toFixed(4),
  //         modere_severe: +p2.toFixed(4),
  //       }
  //     },
  //     diagnostic_final: labels[pred]
  //   };
  // }

}
