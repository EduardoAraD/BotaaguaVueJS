export type PositionPlayer = 'GOL' | 'ZAG' | 'LD' | 'LE' | 'VOL' | 'MC' | 'MEI'| 'ME' | 'MD' | 'PE' | 'PD' | 'SA' | 'ATA'
export const positionGoalKeeper = ['GOL']
export const positionDefenders = ['ZAG', 'LD', 'LE']
export const positionMidfielders = ['VOL', 'MC', 'MD', 'ME', 'MEI']
export const positionForwads = ['PE', 'PD', 'SA', 'ATA']

export interface Player {
  id: string;
  name: string;
  number: number;
  overrall: number;
  image?: string;
  position: PositionPlayer;
  isCurrent: boolean;
}
