import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../../interfaces/cards.interface';
import { CardsService } from '../../services/cards.service';

@Component({
  template: `
    <div class='mx-auto min-w-0 max-w-6xl px-4 pt-4 md:px-12' *ngIf='cards$ | async as cards'>
      <div class='flex flex-wrap justify-center gap-8'>
        <div class='flex-shrink-0 h-100 rounded-lg relative' *ngFor='let card of cards'>

          <img
            class='w-full h-full rounded-lg'
            [src]='card.images.small'
            alt='img'
          />
        </div>
      </div>
    </div>

  `,
})
export class MyDecksComponent {
  private readonly cardsService = inject(CardsService);

  cards$: Observable<ICard[]> = this.cardsService.getAllPaginated().pipe();
}
