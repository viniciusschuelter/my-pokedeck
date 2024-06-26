import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loading',
  template: `
    <div
      class="flex flex-col justify-center items-center date-font loading-overlay"
    >
      <img class="w-[16rem]" alt="loading" src="assets/pokelogo.webp" />
      <h1 class="text-4xl text-yellow-400 ">Loading...</h1>
    </div>
  `,
  styles: [
    `
      .loading-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        position: fixed;
        margin: 0;
      }
    `,
  ],
})
export class LoadingComponent {}
