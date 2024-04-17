export interface Score {
  player: string;
  minute: number;
  assistence?: string;
  isPenalty?: boolean;
}

export interface ScoreMatch {
  goalsHome: Score[];
  goalsAway: Score[];
}
