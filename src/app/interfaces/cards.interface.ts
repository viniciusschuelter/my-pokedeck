import { ISet } from './decks.interface';

export interface ICard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  ancientTrait?: IAncientTrait;
  abilities?: IAbility[];
  attacks?: IAttack[];
  weaknesses?: IWeakness[];
  resistances?: IResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: ISet;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: ILegality;
  regulationMark?: string;
  images: ICardImage;
  tcgplayer?: ITCGPlayer;
  cardmarket?: ICardmarket;
}

export interface ICardmarket {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number | null
    lowPrice: number | null
    trendPrice: number | null
    germanProLow: number | null
    suggestedPrice: number | null
    reverseHoloSell: number | null
    reverseHoloLow: number | null
    reverseHoloTrend: number | null
    lowPriceExPlus: number | null
    avg1: number | null
    avg7: number | null
    avg30: number | null
    reverseHoloAvg1: number | null
    reverseHoloAvg7: number | null
    reverseHoloAvg30: number | null
  };
}

export interface IAncientTrait {
  name: string;
  text: string;
}

export interface IAttack {
  convertedEnergyCost: number;
  cost: string[];
  damage: string;
  name: string;
  text: string;
}

export interface IAbility {
  name: string;
  text: string;
  type: string;
}

export interface IResistance {
  type: string;
  value: string;
}

export interface IWeakness {
  type: string;
  value: string;
}

export interface ITCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
    normal: IPrice | undefined;
    holofoil: IPrice | undefined;
    reverseHolofoil: IPrice | undefined;
    '1stEditionNormal': IPrice | undefined;
    '1stEditionHolofoil': IPrice | undefined;
  };
}

export interface IPrice {
  low: number | null;
  mid: number | null;
  high: number | null;
  market: number | null;
  directLow: number | null;
}

export enum Legality {
  LEGAL = 'Legal',
  BANNED = 'Banned',
}

export interface ILegality {
  expanded: Legality | undefined;
  standard: Legality | undefined;
  unlimited: Legality | undefined;
}

export interface ICardImage {
  small: string;
  large: string;
}
