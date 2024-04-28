export interface Score {
  player: string;
  minute: string;
  assistence?: string;
  isPenalty?: boolean;
}

export interface ScoreMatch {
  goalsHome: Score[];
  goalsAway: Score[];
  scorePenalts?: {
    home: number;
    away: number;
  }
}
