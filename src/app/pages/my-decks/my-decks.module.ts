import { NgModule } from '@angular/core';
import { MyDecksComponent } from './my-decks.component';
import { Route, RouterModule } from '@angular/router';
import { MyDeckListComponent } from '../../components/my-deck-list/my-deck-list.component';

const routes: Route[] = [
  {
    path: '',
    component: MyDecksComponent,
  },
];

@NgModule({
  declarations: [MyDecksComponent],
  imports: [
    RouterModule,
    MyDeckListComponent,
    RouterModule.forChild(routes),
  ],
  exports: [MyDecksComponent],
})
export class MyDecksModule {
}
