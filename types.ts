import { ReactNode } from 'react';

export interface ArchitectureComponent {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
  category: 'Ingestion' | 'Processing' | 'Storage' | 'Transformation' | 'Forecasting' | 'Visualization & Alerting';
  fullExplanation: string;
}

export interface LiveStats {
  orders: number[];
  forecast: number[];
  labels: string[];
  backlog: number;
  recommendedStaff: number;
  alertStatus: 'Green' | 'Yellow' | 'Red';
}
