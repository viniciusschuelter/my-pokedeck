import { ICard, ILegality } from './cards.interface';


export interface DeckInterface {
  deckName: string
  selectedCards: ICard[]
}

export interface ISet {
  id: string;
  images: ISetImage;
  legalities: ILegality;
  name: string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  total: number;
  updatedAt: string;
}

export interface ISetImage {
  symbol: string;
  logo: string;
}
