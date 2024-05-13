import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';
import { Route, RouterModule } from '@angular/router';
import { DeckListComponent } from '../../components/deck-list/deck-list.component';

const routes: Route[] = [
  {
    path: '',
    component: CardsComponent,
  },
];

@NgModule({
  declarations: [CardsComponent],
  imports: [
    RouterModule,
    DeckListComponent,
    RouterModule.forChild(routes),
  ],
  exports: [CardsComponent],
})
export class CardsModule {
}
