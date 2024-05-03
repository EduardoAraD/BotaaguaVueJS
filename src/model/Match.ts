import { emptyClub, type Club } from "./Club";
import { FaseMatch } from "./FaseMatch";
import { ScoreMatch } from "./Score";
import { emptyStats, type StatsMatch } from "./StatsMatch";

type ChampionshipType =
  'UEFA Champions League' |
  'UEFA Europa League' |
  'UEFA Super Cup' |
  'CONMEBOL Libertadores' |
  'CONMEBOL Sudamericana';

export interface Match {
  id: string
  home: Club;
  away: Club;
  date: string;
  publicationDate: string;
  stadium: string;
  championship: ChampionshipType;
  stage: FaseMatch;
  season: number;
  score: ScoreMatch
}

export interface MatchCompleted extends Match {
  video: string;
  stats: StatsMatch;
}

export const emptyMatchComplete: MatchCompleted = {
  id: '-',
  home: emptyClub,
  away: emptyClub,
  date: '2024-01-01',
  publicationDate: '2024-01-01',
  stadium: emptyClub.stadium,
  championship: 'UEFA Europa League',
  stage: 'Fase de Grupos',
  season: 1,
  score: {
    goalsAway: [],
    goalsHome: [],
  },
  video: '',
  stats: {
    home: emptyStats,
    away: emptyStats,
  }
}
