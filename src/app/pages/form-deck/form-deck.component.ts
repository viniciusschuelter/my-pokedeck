import { Component, inject } from '@angular/core';
import { ICard } from '../../interfaces/cards.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MyDecksService } from '../../services/my-decks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeckInterface } from '../../interfaces/decks.interface';


@Component({
  template: `
    <div>
      <div
        class='text-center text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 pt-4 mb-10'>
        {{ !deck ? 'Create' : 'Update' }} Deck
      </div>
      <div class='grid grid-cols-2 gap-4'>
        <form [formGroup]='deckFormGroup' class='max-w-md w-full h-full mx-auto'>
          <div class='mb-5'>
            <label for='deckName' class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Deck Name</label>
            <input id='deckName'
                   formControlName='deckName'
                   class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                   placeholder='Deck Name' required />
          </div>
          <div class='mb-12'>
            <h4 class='text-xl font-medium text-slate-900 dark:text-slate-200 font-bold mb-5'>
              Your selected Cards <span class='text-sm font-medium'>(min: 24; max:60)</span>
            </h4>
            @if (deckFormGroup.value["selectedCards"].length) {
            <app-selected-cards
              [cardsSignal]='deckFormGroup.value["selectedCards"]'
              (removeCard)='removeCard($event)'
            ></app-selected-cards>
            } @else {
            <p>You dont have any card selected yet</p>
            }
          </div>
          <button type='submit'
                  [disabled]='deckFormGroup.invalid'
                  (click)='!deck ? createDeck() : updateDeck()'
                  class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'>
            {{ !deck ? 'Create' : 'Update' }} Deck
          </button>
        </form>
        <div>
          <h4 class='text-xl font-medium text-slate-900 dark:text-slate-200 font-bold text-center mb-5'>Select here your Cards</h4>
          <app-deck-list (selectCard)='selectedCard($event)'></app-deck-list>
        </div>
      </div>
    </div>

  `,
})
export class FormDeckComponent {
  private myDecksService = inject(MyDecksService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);
  private toastr = inject(ToastrService);

  deckFormGroup!: FormGroup;
  deck!: DeckInterface | undefined;

  constructor() {
    this.initFormGroup();
  }

  initFormGroup(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.deck = this.myDecksService.getDeckById(id);
    this.deckFormGroup = this.formBuilder.group({
      id: new FormControl(id || new Date().getTime() , [Validators.required]),
      deckName: new FormControl(this.deck?.deckName || '', [Validators.required, Validators.minLength(3)]),
      selectedCards: new FormControl(this.deck?.selectedCards || [],
        [Validators.required, Validators.minLength(24), Validators.maxLength(60)],
      ),
    });
  }

  selectedCard(card: ICard): void {
    const cards = [...this.deckFormGroup.get('selectedCards')?.value, card];
    if (cards.filter(_ => _.name === card.name).length > 4) {
      this.toastr.warning('You can just have 4 equals card', 'Repeated Card');
      return;
    }
    this.deckFormGroup.get('selectedCards')?.setValue(cards);
  }

  removeCard(index: number): void {
    const cards = this.deckFormGroup.get('selectedCards')?.value;
    this.deckFormGroup.get('selectedCards')?.setValue(cards.filter((_: any, i: any) => i !== index));
  }

  createDeck(): void {
    this.myDecksService.addNewDeck(this.deckFormGroup.value);
    this.router.navigateByUrl('')
  }

  updateDeck(): void {
    this.myDecksService.updateDeck(this.deckFormGroup.value);
    this.router.navigateByUrl('')
  }
}
