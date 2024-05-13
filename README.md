# My Pokedeck
<p>My Pokedeck is a web application built using Angular v17 that utilizes the Pokémon TCG API to
  create and manage Pokémon decks. The project aims to provide users with a platform to easily assemble and organize
  their own Pokémon card decks for the Pokémon Trading Card Game.</p>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.
<h2>Features</h2>
<ul>
  <li><p><strong>Integration with Pokémon TCG API</strong>: Utilizes the official Pokémon TCG API (<a target='_new'
                                                                                                      rel='noreferrer'
                                                                                                      href='https://docs.pokemontcg.io'>https://docs.pokemontcg.io</a>)
    to fetch data about Pokémon cards, including their attributes and abilities.</p></li>
  <li><p><strong>Deck Building</strong>: Allows users to create and manage their own Pokémon card decks by selecting
    cards from the extensive database provided by the Pokémon TCG API.</p></li>
  <li><p><strong>Lazy Loading Modules</strong>: Utilizes Angular's lazy loading feature to optimize performance by
    loading modules on-demand, improving initial load times.</p></li>
  <li><p><strong>Infinite Scrolling</strong>: Implements an infinite scrolling mechanism for smooth browsing through
    large collections of Pokémon cards, ensuring a seamless user experience.</p></li>
  <li><p><strong>Form Group Validators</strong>: Implements form group validators to ensure data integrity and validate
    user input when creating or editing deck configurations.</p></li>
  <li><p><strong>Theme Support</strong>: Offers both dark and light themes for user interface customization, providing
    users with a personalized experience.</p></li>
  <li><p><strong>Reactivity based on Signals</strong>: Utilizes reactive programming principles to ensure real-time
    updates and responsiveness throughout the application, enhancing user engagement.</p></li>
  <li><p><strong>Input Signals</strong>: Incorporates input signals to facilitate communication between components,
    enabling efficient data exchange and interaction.</p></li>
</ul><h2>Installation</h2><p>To run the application locally, follow these steps:</p>
<ol>
  <li><p>Clone the repository:</p>
    <pre><div class='dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium'><div
      class='flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md'><span>bash</span><div
      class='flex items-center'><span class='' data-state='closed'><button class='flex gap-1 items-center'><svg
      xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' class='icon-sm'><path
      fill='currentColor' fill-rule='evenodd'
      d='M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z'
      clip-rule='evenodd'></path></svg>Copy code</button></span></div></div><div
      class='overflow-y-auto p-4 text-left undefined' dir='ltr'><code
      class='!whitespace-pre hljs language-bash'>git <span class='hljs-built_in'>clone</span> https://github.com/viniciusschuelter/my-pokedeck.git
</code></div></div></pre>
  </li>
  <li><p>Navigate to the project directory:</p>
    <pre><div class='dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium'><div
      class='flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md'><span>bash</span><div
      class='flex items-center'><span class='' data-state='closed'><button class='flex gap-1 items-center'><svg
      xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' class='icon-sm'><path
      fill='currentColor' fill-rule='evenodd'
      d='M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z'
      clip-rule='evenodd'></path></svg>Copy code</button></span></div></div><div
      class='overflow-y-auto p-4 text-left undefined' dir='ltr'><code class='!whitespace-pre hljs language-bash'><span
      class='hljs-built_in'>cd</span> my-pokedeck
</code></div></div></pre>
  </li>
  <li><p>Install dependencies:</p>
    <pre><div class='dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium'><div
      class='flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md'><span>bash</span><div
      class='flex items-center'><span class='' data-state='closed'><button class='flex gap-1 items-center'><svg
      xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' class='icon-sm'><path
      fill='currentColor' fill-rule='evenodd'
      d='M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z'
      clip-rule='evenodd'></path></svg>Copy code</button></span></div></div><div
      class='overflow-y-auto p-4 text-left undefined' dir='ltr'><code class='!whitespace-pre hljs language-bash'>npm install
</code></div></div></pre>
  </li>
  <li><p>Run the development server:</p>
    <pre><div class='dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium'><div
      class='flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md'><span>bash</span><div
      class='flex items-center'><span class='' data-state='closed'><button class='flex gap-1 items-center'><svg
      xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' class='icon-sm'><path
      fill='currentColor' fill-rule='evenodd'
      d='M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z'
      clip-rule='evenodd'></path></svg>Copy code</button></span></div></div><div
      class='overflow-y-auto p-4 text-left undefined' dir='ltr'><code class='!whitespace-pre hljs language-bash'>ng serve
</code></div></div></pre>
  </li>
  <li><p>Access the application in your browser at <code>http://localhost:4200</code>.</p></li>
</ol><h2>Contributing</h2><p>Contributions are welcome! If you'd like to contribute to My Pokedeck, please follow these
  guidelines:</p>
<ol>
  <li>Fork the repository and create your branch from <code>main</code>.</li>
  <li>Make your changes and ensure the codebase is consistent with the existing style.</li>
  <li>Test your changes thoroughly.</li>
  <li>Submit a pull request detailing the changes you've made and any relevant information.</li>
</ol>
<h2>Acknowledgments</h2>
<ul>
  <li>Pokémon TCG API: Thank you to the Pokémon TCG API for providing the data used in this project.</li>
</ul>
<hr><p>Feel free to adjust and expand upon this template as needed for your project! Let me know if you need further
  assistance.</p>
