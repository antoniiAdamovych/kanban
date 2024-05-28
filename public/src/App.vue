<template>
    <div class="reveal">
        <div class="slides">
            <Slide1 />
            <Slide2 />
            <Slide3 />
        </div>
    </div>
    <div
        :class="isToastActive ? 'opacity-100' : 'opacity-0'"
        class="toast fixed z-50 bottom-4 left-4 px-4 py-2 border text-white rounded-sm transition-opacity duration-300">
        <div class="toast__content flex items-center gap-4">
            <p>Press Enter to open fullscreen mode</p>
            <button @click="isToastActive = false" id="toast_close"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

import Reveal from 'reveal.js';
import client from './store/presentation';

import { onMounted, ref } from 'vue';

import Slide1 from './slides/Slide1.vue';
import Slide2 from './slides/Slide2.vue';
import Slide3 from './slides/Slide3.vue';

const isToastActive = ref(true);

onMounted(() => {
    // @ts-ignore
    Reveal.initialize({});
    // @ts-ignore
    Reveal.on('slidechanged', (event) => {
        client.value.fragmentBeginn = true;
        client.value.activeSlide = event.indexh;
    });
    // @ts-ignore
    Reveal.on('fragmentshown', event => {
        console.log("changed")
        client.value.fragmentBeginn = false;
        client.value.activeFragment = event.fragment.getAttribute('data-fragment-index');
    });
    // @ts-ignore
    Reveal.on('fragmenthidden', event => {
        if (event.fragment.getAttribute('data-fragment-index') == '0') {
            client.value.fragmentBeginn = true;
        } else {
            client.value.fragmentBeginn = false;
        }
        client.value.activeFragment = event.fragment.getAttribute('data-fragment-index');
    })

    KeyEvents();

    setTimeout(() => {
        isToastActive.value = false;
    }, 3000);
})

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
    const toast: HTMLElement = document.querySelector('.toast')!;

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();

        if (toast) toast.style.opacity = "0";

    } else if (document.exitFullscreen) {
        document.exitFullscreen();
        if (toast) toast.style.opacity = "1";
    }
}

</script>