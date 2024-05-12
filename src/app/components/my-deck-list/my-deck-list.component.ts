import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ICard } from '../../interfaces/cards.interface';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CardsService } from '../../services/cards.service';
import { BehaviorSubject, combineLatest, debounce, interval, Observable, scan, switchMap, tap } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { InfiniteScrollerDirective } from '../../directives/infinite-scroller.directive';
import { MyDecksService } from '../../services/my-decks.service';
import { DeckCardComponent } from '../deck-card/deck-card.component';
import { Router } from '@angular/router';
import { DeckInterface } from '../../interfaces/decks.interface';


@Component({
  standalone: true,
  selector: 'app-my-deck-list',
  template: `
    @if (myDecksService.myDecks$ | async; as decks) {
    @if (decks.length) {
    <div class='flex flex-wrap justify-center gap-8'>
      @for (deck of decks; track deck) {
      <div class='relative'>
        <app-deck-card (click)='goToFormDeck(deck)' [deckSignal]='deck'></app-deck-card>
        <h4 class='absolute bottom-0 flex justify-center items-center w-full font-xxl font-extrabold text-amber-300 bg-blue-900 rounded-b-lg'>{{deck.deckName}}</h4>
        <div class='cursor-pointer transition-all opacity-80 hover:opacity-100 scale-75 hover:scale-100 bg-red-600 font-bold absolute rounded-xl top-[-8px] right-[-8px] text-white px-2'
        (click)='myDecksService.removeDeck(deck)'>X</div>
      </div>
      }
    </div>
    } @else {
    <p class='font-xl font-bold text-center p-12'>You dont have any deck yet</p>
    }
      }
  `,
  imports: [AsyncPipe, DeckCardComponent],
})
export class MyDeckListComponent {
  myDecksService = inject(MyDecksService);
  private router = inject(Router);

  goToFormDeck(deck: DeckInterface): void {
    this.router.navigateByUrl(`deck/${deck.id}`);
  }
}
