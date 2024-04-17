import { Match, MatchCompleted } from "../model/Match";
import { matchsEuropa } from "./data/matchs";

export function getListMatch(): Match[] {
  return matchsEuropa
}

export function getMatchById(idMatch: string): MatchCompleted | undefined {
  return matchsEuropa.find(item => item.id === idMatch)
}
