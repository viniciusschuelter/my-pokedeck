import { NgModule } from '@angular/core';
import { DecksComponent } from './decks.component';
import { Route, RouterModule } from '@angular/router';
import { DeckListComponent } from '../../components/deck-list/deck-list.component';

const routes: Route[] = [
  {
    path: '',
    component: DecksComponent,
  },
];

@NgModule({
  declarations: [DecksComponent],
  imports: [
    RouterModule,
    DeckListComponent,
    RouterModule.forChild(routes),
  ],
  exports: [DecksComponent],
})
export class DecksModule {
}
