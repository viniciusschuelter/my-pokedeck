import { Component, input, InputSignal } from '@angular/core';
import { ICard } from '../../interfaces/cards.interface';


@Component({
  standalone: true,
  selector: 'app-card',
  template: `
    <div class='flex-shrink-0 h-100 rounded-lg relative'>
      <img
        class='w-full h-full rounded-lg'
        [src]='cardSignal().images.small'
        alt='img'
      />
    </div>
  `
})
export class CardComponent {
  cardSignal: InputSignal<ICard> = input.required()
}
