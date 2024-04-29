import type { MatchCompleted } from "../../model/Match";
import { ASMonaco, Atalanta, AtleticoMadrid, Botaagua, Chelsea, LASK, ManchesterCity, Napoli, OlympiqueMarseille, PSG, Sevilla, StadeRennais, Tottenham } from "./clubs";

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
        { player: 'KOREN', minute: '86', assistence: 'PLEA' },
      ],
      goalsAway: [
        { player: 'VEGA', minute: '25', assistence: 'ANDRADE' },
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
        { player: 'PERALTA', minute: '14', assistence: 'AGUADO' },
        { player: 'VEGA', minute: '38', assistence: 'ANDRADE' },
        { player: 'ANDRADE', minute: '74', assistence: 'AGUADO' },
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
        { player: 'ÁLVAREZ', minute: '72' },
        { player: 'AOUAR', minute: '90 + 5', assistence: 'LINDSTROM' },
      ],
      goalsAway: [
        { player: 'INÁLCIO', minute: '11', assistence: 'AGUADO' },
        { player: 'ANDRADE', minute: '26' },
        { player: 'PERALTA', minute: '66' },
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
        { player: 'ANDRADE', minute: '39', assistence: 'AGUADO' },
      ],
      goalsAway: [
        { player: 'AOUAR', minute: '33', assistence: 'WARD-PROWSE' },
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
        { player: 'ANDRADE', minute: '40', assistence: 'PERALTA' },
        { player: 'VEGA', minute: '63', assistence: 'ANDRADE' },
        { player: 'PERALTA', minute: '85', assistence: 'ANDRADE' },
      ],
      goalsAway: [
        { player: 'BOADU', minute: '35' },
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
    date: '2024-04-19 19:00:00',
    publicationDate: '2024-04-17 20:00:00',
    stadium: OlympiqueMarseille.stadium,
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Semi-final',
    score: {
      goalsHome: [
        { player: 'MAXI GÓMEZ', minute: '40', assistence: 'VERETOUT' },
        { player: 'GRIEZMANN', minute: '89', assistence: 'VERETOUT' },
      ],
      goalsAway: [
        { player: 'ANDRADE', minute: '5' },
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
    date: '2024-04-20 19:00:00',
    publicationDate: '2024-04-19 20:00:00',
    stadium: "St. Mary's Stadium - Southampton",
    championship: 'UEFA Europa League',
    season: 1,
    stage: 'Final',
    score: {
      goalsHome: [
        { player: 'VEGA', minute: '26', assistence: 'ANDRADE' },
        { player: 'VEGA', minute: '45', assistence: 'ADAM' },
      ],
      goalsAway: [],
    },
    video: 'https://www.youtube.com/embed/AA4b8lIp9zc?si=1oRrHH-TmuURVIHX',
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
    date: '2024-04-22 19:00:00',
    publicationDate: '2024-04-21 10:00:00',
    stadium: "Stadium Olympik",
    championship: 'UEFA Super Cup',
    season: 2,
    stage: 'Final',
    score: {
      goalsHome: [
        { player: 'HAALAND', minute: '38', assistence: 'GALLAGHER' },
        { player: 'GORETZKA', minute: '105 + 2', assistence: 'RODRYGO' },
      ],
      goalsAway: [
        { player: 'VEGA', minute: '27' },
        { player: 'VEGA', minute: '120 + 2', assistence: 'DICKINSON' },
      ],
      scorePenalts: {
        home: 5,
        away: 4,
      }
    },
    video: 'https://www.youtube.com/embed/jnzB5p97zBs?si=C8ixuzNoBRJObgbf',
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
  {
    id: '9',
    home: ManchesterCity,
    away: Botaagua,
    date: '2024-04-23 19:00:00',
    publicationDate: '2024-04-21 10:00:00',
    stadium: ManchesterCity.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: 'Fase de Grupos',
    score: {
      goalsHome: [
        { player: 'RODRYGO', minute: '26', assistence: 'HAALAND' },
        { player: 'HAALAND', minute: '59', assistence: 'DE JONG' },
      ],
      goalsAway: [
        { player: 'HERNÁNDEZ (C)', minute: '67' },
        { player: 'PERALTA', minute: '85', assistence: 'LOIC' },
      ],
    },
    video: 'https://www.youtube.com/embed/d0vVnJTJ4B8?si=y-FEgl7sZEhYg1mk',
    stats: {
      home: {
        goals: 2,
        possession: 49,
        kicks: 8,
        expectedGoals: 3.5,
        cornerKick: 1,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 2,
        possession: 51,
        kicks: 3,
        expectedGoals: 1.4,
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
    id: '10',
    home: Botaagua,
    away: ASMonaco,
    date: '2024-04-24 19:00:00',
    publicationDate: '2024-04-21 10:00:00',
    stadium: Botaagua.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: 'Fase de Grupos',
    score: {
      goalsHome: [
        { player: 'ALONSO', minute: '59', assistence: 'INÁLCIO' },
        { player: 'SCHRODER', minute: '76', assistence: 'PERALTA' },
        { player: 'ALONSO', minute: '82', assistence: 'SCHRODER' },
        { player: 'ALONSO', minute: '90 + 3', assistence: 'DICKINSON' },
      ],
      goalsAway: [],
    },
    video: 'https://www.youtube.com/embed/4QbjWQHC33Y?si=pHwfSp1mvoXFPnLD',
    stats: {
      home: {
        goals: 4,
        possession: 52,
        kicks: 9,
        expectedGoals: 2.2,
        cornerKick: 1,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 0,
        possession: 48,
        kicks: 6,
        expectedGoals: 1.2,
        cornerKick: 1,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '11',
    home: LASK,
    away: Botaagua,
    date: '2024-04-25 19:00:00',
    publicationDate: '2024-04-21 10:00:00',
    stadium: LASK.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: 'Fase de Grupos',
    score: {
      goalsHome: [
        { player: 'ALONSO', minute: '18', assistence: 'SCHRODER' },
      ],
      goalsAway: [
        { player: 'SIMMS', minute: '29', assistence: 'B. TOURE' },
      ],
    },
    video: 'https://www.youtube.com/embed/riJyeB7f2f0?si=GuHoG8dE4CIF6Piw',
    stats: {
      home: {
        goals: 1,
        possession: 50,
        kicks: 7,
        expectedGoals: 1.5,
        cornerKick: 2,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 1,
        possession: 50,
        kicks: 6,
        expectedGoals: 1.5,
        cornerKick: 3,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '12',
    home: Botaagua,
    away: LASK,
    date: '2024-04-26 19:00:00',
    publicationDate: '2024-04-21 10:00:00',
    stadium: Botaagua.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: 'Fase de Grupos',
    score: {
      goalsHome: [
        { player: 'PERALTA', minute: '32', assistence: 'ADAM' },
        { player: 'INÁLCIO', minute: '45', assistence: 'VEGA' },
        { player: 'ALONSO', minute: '69', assistence: 'ADAM' },
      ],
      goalsAway: [
        { player: 'JAGIELLO', minute: '90 + 3', assistence: 'SABITZO' },
      ],
    },
    video: 'https://www.youtube.com/embed/n05AZMLLS0s?si=eq3CK57SiAQS5Dw1',
    stats: {
      home: {
        goals: 3,
        possession: 44,
        kicks: 7,
        expectedGoals: 2.5,
        cornerKick: 3,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 1,
        possession: 56,
        kicks: 9,
        expectedGoals: 1.3,
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
    id: '13',
    home: Botaagua,
    away: ManchesterCity,
    date: '2024-04-27 19:00:00',
    publicationDate: '2024-04-21 10:00:00',
    stadium: Botaagua.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: 'Fase de Grupos',
    score: {
      goalsHome: [
        { player: 'ALONSO', minute: '7', assistence: 'PERALTA' },
      ],
      goalsAway: [
        { player: 'FODEN', minute: '30', assistence: 'D. JONG' },
        { player: 'GORETZKA', minute: '63', assistence: 'HAALAND' },
      ],
    },
    video: 'https://www.youtube.com/embed/njBViByLlrQ?si=_P4YPCFFIZNLt6I1',
    stats: {
      home: {
        goals: 1,
        possession: 48,
        kicks: 6,
        expectedGoals: 1.2,
        cornerKick: 2,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 2,
        possession: 52,
        kicks: 7,
        expectedGoals: 2.2,
        cornerKick: 2,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '14',
    home: ASMonaco,
    away: Botaagua,
    date: '2024-04-28 19:00:00',
    publicationDate: '2024-04-21 10:00:00',
    stadium: ASMonaco.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: 'Fase de Grupos',
    score: {
      goalsHome: [
        { player: 'SAGNAN', minute: '77' },
      ],
      goalsAway: [
        { player: 'DEAN', minute: '51', assistence: 'VEGA' },
        { player: 'DEAN', minute: '60' },
      ],
    },
    video: 'https://www.youtube.com/embed/s9SVCOoWWdw?si=-ZSls5Mws8o7meIP',
    stats: {
      home: {
        goals: 1,
        possession: 52,
        kicks: 7,
        expectedGoals: 1.6,
        cornerKick: 3,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 2,
        possession: 48,
        kicks: 6,
        expectedGoals: 1.8,
        cornerKick: 3,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '15',
    home: Botaagua,
    away: AtleticoMadrid,
    date: '2024-04-29 19:00:00',
    publicationDate: '2024-04-29 00:00:01',
    stadium: Botaagua.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: 'Oitavas de Final',
    score: {
      goalsHome: [
        { player: 'ALONSO', minute: '45 + 1', assistence: 'INÁLCIO' },
        { player: 'INÁLCIO', minute: '66' },
        { player: 'VEGA', minute: '78', assistence: 'DICKINSON' },
      ],
      goalsAway: [
        { player: 'RICHARLISON', minute: '17', assistence: 'MANU KONE' },
        { player: 'SZOBOSZLAI', minute: '54' },
        { player: 'SZOBOSZLAI', minute: '90 + 4', assistence: 'MAZRADUI' },
      ],
    },
    video: 'https://www.youtube.com/embed/8lRCOcl8D_k?si=LnoJJ7BvhvMhU9ZL',
    stats: {
      home: {
        goals: 3,
        possession: 53,
        kicks: 8,
        expectedGoals: 2.9,
        cornerKick: 2,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 3,
        possession: 47,
        kicks: 4,
        expectedGoals: 1.4,
        cornerKick: 0,
        offSide: 1,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '16',
    home: AtleticoMadrid,
    away: Botaagua,
    date: '2024-04-30 19:00:00',
    publicationDate: '2024-04-29 00:00:01',
    stadium: AtleticoMadrid.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: 'Oitavas de Final',
    score: {
      goalsHome: [],
      goalsAway: [
        { player: 'ADAM', minute: '77', assistence: 'ANDRADE' },
      ],
    },
    video: 'https://www.youtube.com/embed/ZL1m1YQwocY?si=mNz4L6B1faGdcEaj',
    stats: {
      home: {
        goals: 0,
        possession: 45,
        kicks: 7,
        expectedGoals: 2.1,
        cornerKick: 3,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 1,
        possession: 55,
        kicks: 5,
        expectedGoals: 1.9,
        cornerKick: 1,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '17',
    home: Chelsea,
    away: Botaagua,
    date: '2024-05-01 19:00:00',
    publicationDate: '2024-04-30 20:00:00',
    stadium: Chelsea.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: "Quartas de Final",
    score: {
      goalsHome: [],
      goalsAway: [
        { player: 'INÁLCIO', minute: '44', assistence: 'VEGA' },
      ],
    },
    video: 'https://www.youtube.com/embed/YcnCgAvKfoU?si=sohOwaGBCNDo1YZs',
    stats: {
      home: {
        goals: 0,
        possession: 40,
        kicks: 3,
        expectedGoals: 0.7,
        cornerKick: 0,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 1,
        possession: 60,
        kicks: 8,
        expectedGoals: 1.6,
        cornerKick: 1,
        offSide: 1,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '18',
    home: Botaagua,
    away: Chelsea,
    date: '2024-05-02 19:00:00',
    publicationDate: '2024-04-30 20:00:00',
    stadium: Botaagua.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: "Quartas de Final",
    score: {
      goalsHome: [
        { player: 'ANDRADE', minute: '27', assistence: 'NOVAK' },
        { player: 'ANDRADE', minute: '57' },
      ],
      goalsAway: [],
    },
    video: 'https://www.youtube.com/embed/XClX94BeSF8?si=FGw-e8yOpBcpvJVF',
    stats: {
      home: {
        goals: 2,
        possession: 47,
        kicks: 6,
        expectedGoals: 2.2,
        cornerKick: 1,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 0,
        possession: 53,
        kicks: 6,
        expectedGoals: 1.5,
        cornerKick: 2,
        offSide: 1,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '19',
    home: Botaagua,
    away: Napoli,
    date: '2024-05-03 19:00:00',
    publicationDate: '2024-05-02 20:00:00',
    stadium: Botaagua.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: "Semi-final",
    score: {
      goalsHome: [
        { player: 'ANDRADE', minute: '90 + 1', assistence: 'INÁLCIO' },
      ],
      goalsAway: [],
    },
    video: 'https://www.youtube.com/embed/cO1EX5m0SJk?si=8rSKQng4KT2eixRo',
    stats: {
      home: {
        goals: 1,
        possession: 52,
        kicks: 7,
        expectedGoals: 2.7,
        cornerKick: 3,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 0,
        possession: 48,
        kicks: 3,
        expectedGoals: 0.7,
        cornerKick: 1,
        offSide: 0,
        free: 0,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
  {
    id: '20',
    home: Napoli,
    away: Botaagua,
    date: '2024-05-04 19:00:00',
    publicationDate: '2024-05-02 20:00:00',
    stadium: Napoli.stadium,
    championship: 'UEFA Champions League',
    season: 2,
    stage: "Semi-final",
    score: {
      goalsHome: [
        { player: 'ZIELINSKI', minute: '65', assistence: 'KVARATSKHELIA' },
      ],
      goalsAway: [
        { player: 'ANDRADE', minute: '5', assistence: 'PERALTA' },
      ],
    },
    video: 'https://www.youtube.com/embed/cndTacFyGZ8?si=p1YAHy-Bh3JmvESh',
    stats: {
      home: {
        goals: 1,
        possession: 51,
        kicks: 5,
        expectedGoals: 1.3,
        cornerKick: 0,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 1,
        possession: 49,
        kicks: 9,
        expectedGoals: 2.9,
        cornerKick: 4,
        offSide: 1,
        free: 1,
        penalty: 0,
        yellowCard: 1,
        redCard: 0,
      }
    }
  },
  {
    id: '21',
    home: PSG,
    away: Botaagua,
    date: '2024-05-05 19:00:00',
    publicationDate: '2024-05-04 20:00:00',
    stadium: '',
    championship: 'UEFA Champions League',
    season: 2,
    stage: 'Final',
    score: {
      goalsHome: [],
      goalsAway: [
        { player: 'INÁLCIO', minute: '45', assistence: 'ANDRADE' },
        { player: 'PERALTA', minute: '54' },
        { player: 'ANDRADE', minute: '70', assistence: 'SCHRODER' },
      ],
    },
    video: 'https://www.youtube.com/embed/hMsuZEOQT_8?si=PT4ZtXRYqWE6T-tw',
    stats: {
      home: {
        goals: 0,
        possession: 37,
        kicks: 3,
        expectedGoals: 0.8,
        cornerKick: 1,
        offSide: 0,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      },
      away: {
        goals: 3,
        possession: 63,
        kicks: 9,
        expectedGoals: 2.9,
        cornerKick: 7,
        offSide: 1,
        free: 1,
        penalty: 0,
        yellowCard: 0,
        redCard: 0,
      }
    }
  },
]
