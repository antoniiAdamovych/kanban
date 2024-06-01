<template>
    <section>
        <h4>Was steht <span class="text-green-800">darauf</span>?</h4>
        <div class="flex gap-4 flex-col justify-center items-center lg:flex-row">
            <div
                class="w-full max-w-[500px] px-8 py-8 lg:w-1/3 h-[400px] lg:h-[300px] bg-blue-800 bg-opacity-50 border border-blue-800 rounded-lg lg:p-4">
                <h6 class="lg:text-xl">To Do</h6>
                <ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] space-y-2">
                    <template v-for="item in tasks">
                        <li class="list-none w-full">
                            <button class="px-4 w-full relative py-3 rounded-lg bg-blue-700 bg-opacity-50 scale-100 transition-all cursor-pointer active:scale-95 hover:bg-opacity-40 space-y-2">
                                <div class="flex items-center justify-between">
                                    <p class="lg:text-base !m-0 p-0" v-text="item.title"></p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                                <div class="flex w-full gap-1">
                                    <div
                                        class="fragment text-xs px-3 py-1 max-h-[25px] rounded-full bg-yellow-800 border border-yellow-800 bg-opacity-50 transition-all duration-300 ease-in-out hover:translate-y-px hover:translate-x-px hover:shadow-lg">
                                        🏝️ Low</div>
                                    <div
                                        class="fragment text-xs px-3 py-1 max-h-[25px] rounded-full bg-purple-800 border border-purple-800 bg-opacity-50 transition-all duration-300 ease-in-out hover:translate-y-px hover:translate-x-px hover:shadow-lg">
                                        🐇 Small</div>
                                    <div class="fragment ml-auto group relative">
                                        <img class="w-6 aspect-square rounded-full bg-green-400 !m-0" src="/assets/avatar.jpeg" />
                                        <p class="text-xs -z-10 opacity-0 group-hover:opacity-100 group-hover:z-10  absolute top-full left-1/2 -translate-x-1/2 w-max !m-0 bg-gray-800 px-2 py-1 rounded-full">Antonii Adamovych</p>
                                    </div>
                                </div>
                            </button>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const tasks = ref([
    { title: 'Task 1', status: 'todo' }
]);

</script>