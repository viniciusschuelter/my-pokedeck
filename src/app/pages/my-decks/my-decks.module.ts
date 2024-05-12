import { NgModule } from '@angular/core';
import { MyDecksComponent } from './my-decks.component';
import { Route, RouterModule } from '@angular/router';
import { DeckListComponent } from '../../components/deck-list/deck-list.component';

const routes: Route[] = [
  {
    path: '',
    component: MyDecksComponent,
  },
];

@NgModule({
  declarations: [MyDecksComponent],
  imports: [
    DeckListComponent,
    RouterModule.forChild(routes),
  ],
  exports: [MyDecksComponent],
})
export class MyDecksModule {
}
