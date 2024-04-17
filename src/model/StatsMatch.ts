interface Stats {
  goals: number;
  possession: number;
  kicks: number;
  expectedGoals: number;
  cornerKick: number;
  offSide: number;
  free: number;
  penalty: number;
  yellowCard: number;
  redCard: number;
}

export interface StatsMatch {
  home: Stats,
  away: Stats
}

export const emptyStats: Stats = {
  goals: 0,
  possession: 50,
  kicks: 0,
  expectedGoals: 0,
  cornerKick: 0,
  offSide: 0,
  free: 0,
  penalty: 0,
  yellowCard: 0,
  redCard: 0,
}

export const emptyStatsMatch: StatsMatch = {
  home: emptyStats,
  away: emptyStats,
}
