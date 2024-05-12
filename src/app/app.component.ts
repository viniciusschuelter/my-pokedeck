import { Component } from '@angular/core';

@Component({
  host: { class: 'block' },
  selector: 'app-root',
  template: `
    <main
      class='h-full antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900'
    >
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {
}
