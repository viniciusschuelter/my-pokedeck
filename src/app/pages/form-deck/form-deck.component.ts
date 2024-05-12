import { Component, inject } from '@angular/core';
import { ICard } from '../../interfaces/cards.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  template: `
    <div>
      <h2 class='relative'>Create a New Deck</h2>
      <div class="grid grid-cols-2 gap-4">
        <form [formGroup]='deckFormGroup' class='max-w-sm mx-auto'>
          <div class='mb-5'>
            <label for='deckName' class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Deck Name</label>
            <input id='deckName'
                   formControlName="deckName"
                   class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                   placeholder='Deck Name' required />
          </div>
          <h4 class='relative'>Your selected Cards</h4>
          <button type='submit'
                  class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Submit
          </button>
        </form>
        <app-deck-list (selectCard)='selectedCard($event)'></app-deck-list>
      </div>
    </div>

  `,
})
export class FormDeckComponent {

  private formBuilder = inject(FormBuilder)

  deckFormGroup!: FormGroup

  constructor() {
    this.initFormGroup()
  }

  initFormGroup(): void {
    this.deckFormGroup = this.formBuilder.group({
      deckName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      selectedCards: new FormControl([],
        [Validators.required, Validators.minLength(24), Validators.minLength(40)]
      )
    })
  }


  selectedCard(card: ICard): void {
    console.log(card)
    console.log(this.deckFormGroup.value);
    const cards = [...this.deckFormGroup.get('selectedCards')?.value, card]
    this.deckFormGroup.get('selectedCards')?.setValue(cards)
  }
}
