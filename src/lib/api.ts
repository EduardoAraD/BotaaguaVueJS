import { Match, MatchCompleted } from "../model/Match";
import { matchsEuropa } from "./data/matchs";
import { getStatusMatchByDateHour } from '../utils/getStatusMatch';
import { news } from "./data/news";
import { News } from "../model/News";

export function getListMatch(): Match[] {
  const dateNow = Date.now();
  return matchsEuropa.filter(match => {
    const publicationDate = new Date(match.publicationDate).getTime();
    
    return dateNow > publicationDate;
  })
}

export function getMatchById(idMatch: string): MatchCompleted | undefined {
  return matchsEuropa.find(item => item.id === idMatch)
}

export function getNextMatch() {
  const matchsPublishes = getListMatch();
  const findMatch = matchsPublishes.find(match => {
    const status = getStatusMatchByDateHour(match.date);
    return status !== 'finished';
  })
  
  if(findMatch === undefined) {
    return matchsPublishes[matchsPublishes.length - 1];
  }
  
  return findMatch;
}

function getNewsPublishes() {
  const dateNow = Date.now();
  const newsPublishes = news.filter(item => {
    const publicationDate = new Date(item.publicationDate).getTime();

    return dateNow > publicationDate;
  });

  return newsPublishes.sort((newsA, newsB) => {
    const timeA = new Date(newsA.publicationDate).getTime()
    const timeB = new Date(newsB.publicationDate).getTime()
    return timeA < timeB ? 1 : -1
  })
}

export function getListNewsPublishes(): News[] {
  return getNewsPublishes();
}

export function getNewsById(idMatch: string): News | undefined {
  return news.find(item => item.id === idMatch)
}

export function getNewsToCarrousel() {
  const numberNewsToCarrousel = 4;

  return getNewsPublishes()
    .filter((_, index) => index < numberNewsToCarrousel);
}
