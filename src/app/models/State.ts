
export interface AnemieStats {
  labels: string[];
  percent: number[];
  colors: string[];
}

export interface FeatureImportance {
  name: string;
  pct: number;
}

export interface DashboardStats {
  total_consultations: number;
}
