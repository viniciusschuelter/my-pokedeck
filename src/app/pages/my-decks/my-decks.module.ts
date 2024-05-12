import { NgModule } from '@angular/core';
import { MyDecksComponent } from './my-decks.component';
import { Route, RouterModule } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

const routes: Route[] = [
  {
    path: '',
    component: MyDecksComponent,
  },
];

@NgModule({
  declarations: [MyDecksComponent],
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    RouterModule.forChild(routes),
  ],
  exports: [MyDecksComponent],
})
export class MyDecksModule {
}
