import { Component, input, InputSignal } from '@angular/core';
import { ICard } from '../../interfaces/cards.interface';
import { DeckInterface } from '../../interfaces/decks.interface';

@Component({
  host: { class: 'relative transition-all hover:scale-105 scale-100 cursor-pointer' },
  standalone: true,
  selector: 'app-deck-card',
  template: `
    <img
      class='w-full h-full rounded-lg'
      src='assets/pokedeck.jpg'
      alt='img'
    />
  `,
})
export class DeckCardComponent {
  deckSignal: InputSignal<DeckInterface> = input.required();
}
