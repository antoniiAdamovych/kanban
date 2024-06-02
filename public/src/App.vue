<template>
    <div class="reveal !hidden lg:!block">
        <div class="slides">
            <Intro />
            <Agile />
            <ClassicAgile />
            <Kanban />
            <Tickets />
            <Ticket />
            <Comparing />
            <Custom />
            <Efficiency />
            <End />
        </div>
    </div>
    <a target="_blank" class="!w-8 aspect-square !absolute top-8 right-8" href="https://github.com/antoniiAdamovych/kanban"><img class="w-full h-full" src="/assets/github-mark.svg" alt=""></a>
    <p class="lg:hidden text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-white">Nutze den Laptop!</p>
</template>

<script setup lang="ts">

import Reveal from 'reveal.js';
import client from './store/presentation';

import { onMounted, ref } from 'vue';

import Intro from './slides/Intro.vue';
import Kanban from './slides/Kanban.vue';
import Tickets from './slides/Tickets.vue';
import Ticket from './slides/Ticket.vue';
import Comparing from './slides/Comparing.vue';
import Custom from './slides/Custom.vue';

import Agile from './slides/Agile.vue';
import ClassicAgile from './slides/Classic-Agile.vue';

import Efficiency from './slides/Efficiency.vue';

import End from './slides/End.vue';

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