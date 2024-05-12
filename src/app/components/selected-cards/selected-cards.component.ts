import { Component, EventEmitter, input, InputSignal, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ICard } from '../../interfaces/cards.interface';


@Component({
  standalone: true,
  selector: 'app-selected-cards',
  template: `
    <div class='flex flex-wrap gap-2'>
      @for (card of cardsSignal(); track card; let idx = $index) {
      <div class='h-[80px] relative'>
        <app-card class='' [cardSignal]='card'></app-card>
        <div class='cursor-pointer transition-all opacity-80 hover:opacity-100 scale-75 hover:scale-100 bg-red-600 font-bold absolute rounded-xl top-[-8px] right-[-8px] text-white px-2'
        (click)='removeCard.emit(idx)'>X</div>
      </div>
      }
    </div>
  `,
  imports: [CardComponent],
})
export class SelectedCardsComponent {
  cardsSignal: InputSignal<ICard[]> = input.required();
  @Output() removeCard: EventEmitter<number> = new EventEmitter<number>();

}
