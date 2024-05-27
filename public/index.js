import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import './css/app.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

let deck = new Reveal({
   plugins: [ Markdown ]
})
deck.initialize();