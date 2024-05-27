import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import './css/app.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

let deck = new Reveal({
   plugins: [Markdown]
})
deck.initialize({
});


document.addEventListener('DOMContentLoaded', () => {
   InitToastActions();
   KeyEvents();
});

function InitToastActions() {
   const trigger = document.getElementById('toast_close');
   const toast = document.querySelector('.toast');

   trigger.onclick = () => toast.remove();

   setTimeout(() => {
      toast.style.opacity = 0;
   }, 5000);
}

function KeyEvents() {
   document.addEventListener(
      "keydown",
      (e) => {
         if (e.key === "Enter") {
            toggleFullScreen();
         }
      },
      false,
   );
}

function toggleFullScreen() {
   const toast = document.querySelector('.toast');

   if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();

      if (toast) toast.style.opacity = 0;

   } else if (document.exitFullscreen) {
      document.exitFullscreen();
      if (toast) toast.style.opacity = 1;
   }
}