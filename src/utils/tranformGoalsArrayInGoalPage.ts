import { Score, ScoreMatch } from "../model/Score";

interface ScoreForPage {
  player: String;
  goals: {
    minute: string;
    isPenalty?: boolean;
  }[];
}

function transformScoreInScorePage(score: Score[]) {
  const scoreForPage: ScoreForPage[] = [];
  score.forEach(item => {
    const findIndex = scoreForPage.findIndex(goal => goal.player === item.player);
    if(findIndex !== -1) {
      scoreForPage[findIndex].goals.push({
        minute: item.minute,
        isPenalty: item.isPenalty
      })
    } else {
      scoreForPage.push({
        player: item.player,
        goals: [{
          minute: item.minute,
          isPenalty: item.isPenalty
        }],
      })
    }
  })

  return scoreForPage;
}

export function tranformScoreArrayInScorePage({ goalsAway, goalsHome }: ScoreMatch) {
  return {
    goalsHome: transformScoreInScorePage(goalsHome),
    goalsAway: transformScoreInScorePage(goalsAway)
  }
}
