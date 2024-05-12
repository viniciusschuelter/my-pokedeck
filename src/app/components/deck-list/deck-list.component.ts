import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ICard } from '../../interfaces/cards.interface';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CardsService } from '../../services/cards.service';
import { BehaviorSubject, combineLatest, debounce, interval, Observable, scan, switchMap, tap } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { InfiniteScrollerDirective } from '../../directives/infinite-scroller.directive';


@Component({
  standalone: true,
  selector: 'app-deck-list',
  template: `
    @if (cards$ | async; as cards) {
      <div
      infiniteScroller
      class="flex flex-wrap justify-center gap-8"
      [disablePagination]="disablePagination || loading"
      (nextBatch)="goToPage(currPage + 1)"
      >
        @for (card of cards; track card) {
          <app-card [cardSignal]='card' (click)='selectCard.emit(card)'></app-card>
        }
      </div>
    }
  `,
  imports: [ AsyncPipe, CardComponent, InfiniteScrollerDirective ]
})
export class DeckListComponent {

  private readonly cardsService = inject(CardsService);
  @Output() selectCard: EventEmitter<ICard> = new EventEmitter<ICard>();

  currPage = 1;
  pageSize = 30;
  reset = true;
  loading = true;
  disablePagination = false;
  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.currPage,
  );

  cards$: Observable<ICard[]>  = combineLatest([
    this.currentPage$,
    this.searchTerm$.pipe(
      debounce(() => interval(400)),
      tap(() => this.resetObservable()),
    ),
  ]).pipe(
    tap(() => (this.loading = true)),
    switchMap(([page, term]) =>
      this.cardsService.getAllPaginated(page, term)
        .pipe(tap(() => (this.loading = false))),
    ),
    scan((acc: any[], data: any) => {
      if (this.reset) {
        this.reset = false;
        return data;
      }
      this.disablePagination = data?.length !== this.pageSize;
      return [...acc, ...data];
    }, []),
  );

  goToPage(page: number): void {
    this.currPage = page;
    this.currentPage$.next(this.currPage);
  }

  resetObservable(): void {
    this.reset = true;
    this.disablePagination = false;
    this.goToPage(1);
  }
}
