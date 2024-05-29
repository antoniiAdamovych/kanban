<template>
    <div class="reveal !hidden lg:!block">
        <div class="slides">
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
        </div>
    </div>
    <p class="lg:hidden text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-white">Nutze den Laptop!</p>
</template>

<script setup lang="ts">

import Reveal from 'reveal.js';
import client from './store/presentation';

import { onMounted, ref } from 'vue';

import Slide1 from './slides/Slide1.vue';
import Slide2 from './slides/Slide2.vue';
import Slide3 from './slides/Slide3.vue';
import Slide4 from './slides/Slide4.vue';
import Slide5 from './slides/Slide5.vue';
import Slide6 from './slides/Slide6.vue';

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