import type { MatchCompleted } from "../../model/Match";
import { Atalanta, Botaagua, ManchesterCity, OlympiqueMarseille, Sevilla, StadeRennais, Tottenham } from "./clubs";

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
    publicationDate: '2024-04-13 20:00:00',
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
    publicationDate: '2024-04-13 20:00:00',
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
    publicationDate: '2024-04-15 20:00:00',
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
    publicationDate: '2024-04-15 20:00:00',
    stadium: Botaagua.stadium,
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Quartas de Final',
    score: {
      goalsHome: [
        { player: 'ANDRADE', minute: 39, assistence: 'AGUADO' },
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
  {
    id: '5',
    home: Botaagua,
    away: OlympiqueMarseille,
    date: '2024-04-18 17:00:00',
    publicationDate: '2024-04-17 20:00:00',
    stadium: Botaagua.stadium,
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Semi-final',
    score: {
      goalsHome: [
        { player: 'ANDRADE', minute: 40, assistence: 'PERALTA' },
        { player: 'VEGA', minute: 63, assistence: 'ANDRADE' },
        { player: 'PERALTA', minute: 85, assistence: 'ANDRADE' },
      ],
      goalsAway: [
        { player: 'BOADU', minute: 35 },
      ],
    },
    video: 'https://www.youtube.com/embed/CZMx9p9WSuI?si=65rwyuSMEKNi2c9L',
    stats: {
      home: {
        goals: 3,
        possession: 50,
        kicks: 12,
        expectedGoals: 3.1,
        cornerKick: 4,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 1,
        possession: 50,
        kicks: 4,
        expectedGoals: 1.2,
        cornerKick: 2,
        offSide: 1,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '6',
    home: OlympiqueMarseille,
    away: Botaagua,
    date: '2024-04-19 17:00:00',
    publicationDate: '2024-04-17 20:00:00',
    stadium: OlympiqueMarseille.stadium,
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Semi-final',
    score: {
      goalsHome: [
        { player: 'MAXI GÓMEZ', minute: 40, assistence: 'VERETOUT' },
        { player: 'GRIEZMANN', minute: 89, assistence: 'VERETOUT' },
      ],
      goalsAway: [
        { player: 'ANDRADE', minute: 5 },
      ],
    },
    video: 'https://www.youtube.com/embed/lYlRtWXvj3o?si=4WanAqkWJPOn1yL4',
    stats: {
      home: {
        goals: 2,
        possession: 58,
        kicks: 10,
        expectedGoals: 2.6,
        cornerKick: 4,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 1,
        possession: 42,
        kicks: 2,
        expectedGoals: 0.3,
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
    id: '7',
    home: Botaagua,
    away: Sevilla,
    date: '2024-04-20 17:00:00',
    publicationDate: '2024-04-19 20:00:00',
    stadium: "St. Mary's Stadium - Southampton",
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Final',
    score: {
      goalsHome: [
        { player: 'VEGA', minute: 26, assistence: 'ANDRADE' },
        { player: 'VEGA', minute: 45, assistence: 'ADAM' },
      ],
      goalsAway: [],
    },
    video: '',
    stats: {
      home: {
        goals: 2,
        possession: 58,
        kicks: 6,
        expectedGoals: 1.2,
        cornerKick: 1,
        offSide: 1,
        free: 2,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 0,
        possession: 42,
        kicks: 2,
        expectedGoals: 0.6,
        cornerKick: 2,
        offSide: 1,
        free: 2,
        penalty: 0,
        yellowCard: 1,
        redCard: 0,
      }
    }
  },
  {
    id: '8',
    home: ManchesterCity,
    away: Botaagua,
    date: '2024-04-22 17:00:00',
    publicationDate: '2024-04-20 20:00:00',
    stadium: "Stadium Olympik",
    championship: 'UEFA Super Cup',
    season: 1,
    stage: 'Final',
    score: {
      goalsHome: [
        { player: 'HAALAND', minute: 38, assistence: 'GALLAGHER' },
        { player: 'GORETZKA', minute: 105, assistence: 'RODRYGO' },
      ],
      goalsAway: [
        { player: 'VEGA', minute: 27 },
        { player: 'VEGA', minute: 120, assistence: 'DICKINSON' },
      ],
      scorePenalts: {
        home: 5,
        away: 4,
      }
    },
    video: '',
    stats: {
      home: {
        goals: 2,
        possession: 44,
        kicks: 7,
        expectedGoals: 1.5,
        cornerKick: 3,
        offSide: 0,
        free: 3,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 2,
        possession: 56,
        kicks: 8,
        expectedGoals: 0.9,
        cornerKick: 1,
        offSide: 3,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
]