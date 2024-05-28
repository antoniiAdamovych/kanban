<template>
    <section id="kanbanDefinition" class="group">
        <h2 :class="`absolute top-1/2 -translate-y-1/2 group-has-[.current-fragment]:lg:-top-full group-has-[.current-fragment]:-top-1/2 group-has-[.current-fragment]:-translate-y-0 left-1/2 -translate-x-1/2 w-max transition-all ease-in-out duration-300 `">
            Was ist <span class="text-purple-600">Kanban</span></h2>
        <ul style="--gap: 1rem;" class="!flex items-start flex-wrap w-full px-20 ">
            <li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none">
                <p class="lg:text-base">Kanban bedeutet auf Japanisch „Signal” und „Karte”.</p>
            </li>
            <li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none bg-purple-900 px-4 rounded-lg">
                <p class="lg:text-base">Entwickelt in den 1940er Jahren von Toyota.</p>
            </li>
            <li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none">
                <p class="lg:text-base">Reduktion von Lagerbeständen und Erhöhung der Produktivität.
                </p>
            </li>
            <li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none">
                <p class="lg:text-base">Kurze Intervalle zur Ergebnisentwicklung und Feedbackverbesserung.</p>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">

import client from '../store/presentation';

</script>