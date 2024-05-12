import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/my-decks/my-decks.module').then((m) => m.MyDecksModule),
  },
  // {
  //   path: 'decks',
  //   loadChildren: () =>
  //     import(./pages/decks/decks.module').then((m) => m.DecksModule),
  // },
  // {
  //   path: 'cards',
  //   loadChildren: () =>
  //     import('./pages/cards/cards.module').then((m) => m.CardsModule),
  // },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
