export enum Tab {
  MMA = "MMA",
  FOOTBALL = "Футбол",
}

export interface ITab {
  label: Tab;
  id: string;
}

export interface AllEvents {
  firstTeam: string;
  secondTeam: string;
  totalPlus: number;
  totalMinus: number;
  firstNotLoose: number;
  secondNotLoose: number;
  noDraw: number;

  firstFighter: string;
  secondFighter: string;
  firstWin: number;
  secondWin: number;
  draw: number;
  totalRoundsMinus: number;
  TotalRoundsPlus: number;
  id: string;
}
