import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeckInterface } from '../interfaces/decks.interface';


@Injectable({ providedIn: 'root'})
export class MyDecksService {
  private myDecksSubject: BehaviorSubject<DeckInterface[]> = new BehaviorSubject<DeckInterface[]>(
    localStorage.getItem('my-decks') ? JSON.parse(localStorage.getItem('my-decks')) : []
  )
  private readonly myDecks$: Observable<DeckInterface[]> = this.myDecksSubject.asObservable();

}
