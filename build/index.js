import './css/app.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

import App from './src/App.vue';
import { createApp } from 'vue/dist/vue.esm-bundler.js';

const vue = createApp({});
vue.component('App', App);
vue.mount('#app');