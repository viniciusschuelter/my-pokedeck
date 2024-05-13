import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-search',
  template: `
    <input
      type="text"
      name="search"
      id="search"
      [value]=""
      (keydown)="onChangeSearch($event.target)"
      class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6 mb-5"
      placeholder="Search your pokecard"
    />
  `,
})
export class SearchComponent {
  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();

  onChangeSearch({ value }: any): void {
    this.searchTerm.emit(value);
  }
}
