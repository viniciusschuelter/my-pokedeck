import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormDeckComponent } from './form-deck.component';
import { DeckListComponent } from '../../components/deck-list/deck-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: FormDeckComponent,
  },
];

@NgModule({
  declarations: [FormDeckComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DeckListComponent,
    RouterModule.forChild(routes),
  ],
  exports: [FormDeckComponent],
})
export class FormDeckModule {
}
