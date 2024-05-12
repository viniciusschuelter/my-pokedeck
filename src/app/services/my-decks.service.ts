import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeckInterface } from '../interfaces/decks.interface';
import { ToastrService } from 'ngx-toastr';


@Injectable({ providedIn: 'root'})
export class MyDecksService {
  private myDecksSubject: BehaviorSubject<DeckInterface[]> = new BehaviorSubject<DeckInterface[]>(
    localStorage.getItem('my-decks') ? JSON.parse(localStorage.getItem('my-decks') || '') : []
  )
  public readonly myDecks$: Observable<DeckInterface[]> = this.myDecksSubject.asObservable();
  private toastr = inject(ToastrService);

  getMyDecks(): DeckInterface[] {
    return this.myDecksSubject.getValue()
  }


  getDeckById(id: number): DeckInterface | undefined {
    return this.getMyDecks().find( _ => _.id == id);
  }

  addNewDeck(deck: DeckInterface): void {
    this.myDecksSubject.next([...this.getMyDecks(), deck]);
    localStorage.setItem('my-decks', JSON.stringify(this.getMyDecks()))
    this.toastr.success('Deck was created successfully', 'Success')
  }


  updateDeck(deck: DeckInterface): void {
    this.myDecksSubject.next(this.getMyDecks().map(_ => _.id == deck.id ? deck : _));
    localStorage.setItem('my-decks', JSON.stringify(this.getMyDecks()))
    this.toastr.success('Deck was updated successfully', 'Success')
  }

  removeDeck(deck: DeckInterface): void {
    this.myDecksSubject.next(this.getMyDecks().filter(_ => _.id != deck.id));
    localStorage.setItem('my-decks', JSON.stringify(this.getMyDecks()))
    this.toastr.success('Deck was deleted successfully', 'Success')
  }
}
