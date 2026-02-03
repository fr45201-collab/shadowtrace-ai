
export enum RiskLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High'
}

export interface ScanResult {
  id: string;
  target: string;
  score: number;
  riskLevel: RiskLevel;
  timestamp: string;
  findings: Finding[];
}

export interface Finding {
  category: string;
  description: string;
  severity: RiskLevel;
}

export interface TimelineData {
  date: string;
  exposure: number;
}
