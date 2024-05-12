import { Component } from '@angular/core';

@Component({
  template: `
    <div class='mx-auto min-w-0 max-w-6xl px-4 pt-4 md:px-12'>
      <div class="flex flex-row-reverse">
        <button
          routerLink='/new-deck'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Create Deck
        </button>
      </div>
      <app-my-deck-list></app-my-deck-list>
    </div>
  `,
})
export class MyDecksComponent {
}
