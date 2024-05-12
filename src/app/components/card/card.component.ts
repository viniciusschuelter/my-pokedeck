import { Component, input, InputSignal } from '@angular/core';
import { ICard } from '../../interfaces/cards.interface';

@Component({
  host: { class: 'relative transition-all hover:scale-105 scale-100 cursor-pointer' },
  standalone: true,
  selector: 'app-card',
  template: `
    <img
      class='w-full h-full rounded-lg'
      [src]='cardSignal().images.small'
      alt='img'
    />
  `
})
export class CardComponent {
  cardSignal: InputSignal<ICard> = input.required()
}
