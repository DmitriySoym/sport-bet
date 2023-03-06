export enum Tab {
  MMA = "MMA",
  FOOTBALL = "Футбол",
}

export interface ITab {
  label: Tab;
  id: string;
}

export interface IMma {
  firstFighter: string;
  secondFighter: string;
  firstWin: number;
  secondWin: number;
  draw: number;
  totalRoundsMinus: number;
  TotalRoundsPlus: number;
  id: number;
}

export interface IFootball {
  firstTeam: string;
  secondFighter: string;
  firstWin: number;
  secondWin: number;
  draw: number;
  totalRoundsMinus: number;
  TotalRoundsPlus: number;
  id: number;
}
