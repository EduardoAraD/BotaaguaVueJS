import type { MatchCompleted } from "../../model/Match";
import { Atalanta, Botaagua, StadeRennais, Tottenham } from "./club";

// export const matchs: MatchCompleted[] = [
//   {
//     id: '1',
//     home: StadeRennais,
//     away: Botaagua,
//     date: '10/03/2024 - 17:00',
//     stadium: StadeRennais.stadium,
//     championship: 'UEFA Champions League',
//     season: 1,
//     stage: 'Fase de Grupos',
//     score: {
//       goalsHome: [
//         { player: 'PLEA', minute: 29, assistence: 'DOKU' },
//       ],
//       goalsAway: [
//         { player: 'ANDERSSON', minute: 38 },
//         { player: 'ANDERSSON', minute: 45 },
//         { player: 'VEGA', minute: 83, assistence: 'AITOR' },
//       ],
//     },
//     video: 'https://www.youtube.com/embed/SS0SWg8D6dg?si=zKSAQRSbhyZRrDuB',
//     stats: {
//       home: {
//         possession: 0,
//         kicks: 3,
//         expectedGoals: 0,
//         cornerKick: 2,
//         offSide: 0,
//         free: 0,
//         penalty: 0,
//         yellowCard: 1,
//         redCard: 0,
//       },
//       away: {
//         possession: 0,
//         kicks: 6,
//         expectedGoals: 0,
//         cornerKick: 0,
//         offSide: 1,
//         free: 0,
//         penalty: 0,
//         yellowCard: 0,
//         redCard: 0,
//       }
//     }
//   },
//   {
//     id: '2',
//     home: Botaagua,
//     away: Tottenham,
//     date: '11/03/2024 - 17:00',
//     stadium: Botaagua.stadium,
//     championship: 'UEFA Champions League',
//     season: 1,
//     stage: 'Fase de Grupos',
//     score: {
//       goalsHome: [],
//       goalsAway: [
//         { player: 'KANE', minute: 12, assistence: 'KEITA' },
//         { player: 'KANE', minute: 70, isPenalty: true },
//       ],
//     },
//     video: 'https://www.youtube.com/embed/cJqVsXWpvso?si=ORBxicpCb3R6t31X',
//     stats: {
//       home: {
//         possession: 0,
//         kicks: 2,
//         expectedGoals: 0,
//         cornerKick: 0,
//         offSide: 0,
//         free: 2,
//         penalty: 0,
//         yellowCard: 0,
//         redCard: 0,
//       },
//       away: {
//         possession: 0,
//         kicks: 4,
//         expectedGoals: 0,
//         cornerKick: 0,
//         offSide: 0,
//         free: 2,
//         penalty: 1,
//         yellowCard: 0,
//         redCard: 0,
//       }
//     }
//   },
// ]

export const matchsEuropa: MatchCompleted[] = [
  {
    id: '1',
    home: StadeRennais,
    away: Botaagua,
    date: '2024-04-14 17:00:00',
    stadium: StadeRennais.stadium,
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Oitavas de Final',
    score: {
      goalsHome: [
        { player: 'KOREN', minute: 86, assistence: 'PLEA' },
      ],
      goalsAway: [
        { player: 'VEGA', minute: 25, assistence: 'ANDRADE' },
      ],
    },
    video: 'https://www.youtube.com/embed/HGdg0WrNk88?si=7bwW3jwmI_SS8Qzs',
    stats: {
      home: {
        goals: 1,
        possession: 52,
        kicks: 6,
        expectedGoals: 0.9,
        cornerKick: 3,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 1,
        possession: 48,
        kicks: 4,
        expectedGoals: 1.2,
        cornerKick: 0,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '2',
    home: Botaagua,
    away: StadeRennais,
    date: '2024-04-15 17:00:00',
    stadium: Botaagua.stadium,
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Quartas de Final',
    score: {
      goalsHome: [
        { player: 'PERALTA', minute: 14, assistence: 'AGUADO' },
        { player: 'VEGA', minute: 38, assistence: 'ANDRADE' },
        { player: 'ANDRADE', minute: 74, assistence: 'AGUADO' },
      ],
      goalsAway: [],
    },
    video: 'https://www.youtube.com/embed/rmItR61hEHk?si=-9yBzWyUCD1h7H39',
    stats: {
      home: {
        goals: 3,
        possession: 53,
        kicks: 6,
        expectedGoals: 2.4,
        cornerKick: 1,
        offSide: 1,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 0,
        possession: 47,
        kicks: 2,
        expectedGoals: 0.5,
        cornerKick: 0,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 1,
      }
    }
  },
  {
    id: '3',
    home: Atalanta,
    away: Botaagua,
    date: '2024-04-16 17:00:00',
    stadium: Atalanta.stadium,
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Quartas de Final',
    score: {
      goalsHome: [
        { player: 'ÁLVAREZ', minute: 72 },
        { player: 'AOUAR', minute: 90, assistence: 'LINDSTROM' },
      ],
      goalsAway: [
        { player: 'INÁLCIO', minute: 11, assistence: 'AGUADO' },
        { player: 'ANDRADE', minute: 26 },
        { player: 'PERALTA', minute: 66 },
      ],
    },
    video: 'https://www.youtube.com/embed/FJMa4oTQBq8?si=mUVnbCUK0HDkt5Qv',
    stats: {
      home: {
        goals: 2,
        possession: 51,
        kicks: 7,
        expectedGoals: 2.4,
        cornerKick: 1,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 3,
        possession: 49,
        kicks: 7,
        expectedGoals: 2.5,
        cornerKick: 0,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '4',
    home: Botaagua,
    away: Atalanta,
    date: '2024-04-17 17:00:00',
    stadium: Botaagua.stadium,
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Quartas de Final',
    score: {
      goalsHome: [
        { player: 'ANDRADE', minute: 33 },
      ],
      goalsAway: [
        { player: 'AOUAR', minute: 33, assistence: 'WARD-PROWSE' },
      ],
    },
    video: 'https://www.youtube.com/embed/FK3sW13hJPE?si=nY6t5KZ6dfxoRqFi',
    stats: {
      home: {
        goals: 1,
        possession: 46,
        kicks: 7,
        expectedGoals: 1.6,
        cornerKick: 2,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 1,
        possession: 54,
        kicks: 6,
        expectedGoals: 1.6,
        cornerKick: 4,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
]
