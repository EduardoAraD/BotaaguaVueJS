import { Botaagua } from "../lib/data/club";
import { emptyClub, type Club } from "./Club";
import { FaseMatch } from "./FaseMatch";
import { ScoreMatch } from "./Score";
import { emptyStats, type StatsMatch } from "./StatsMatch";

export interface Match {
  id: string
  home: Club;
  away: Club;
  date: string;
  stadium: string;
  championship: 'UEFA Champions League' | 'UEFA Europa League';
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
  date: '01/01/2024',
  stadium: emptyClub.stadium,
  championship: 'UEFA Champions League',
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
