<template>
    <section>
        <h4>Struktur</h4>
        <div class="flex gap-4 flex-col justify-center items-center lg:flex-row">
            <div class="w-full max-w-[500px] px-8 py-8 lg:w-1/3 h-[400px] lg:h-[300px] bg-blue-800 bg-opacity-50 border border-blue-800 rounded-lg lg:p-4">
                <h6 class="lg:text-xl">To Do</h6>
                <ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] space-y-2 overflow-auto">
                    <template v-for="item in tasks.filter((task) => task.status == 'todo')">
                        <li class="list-none w-full">
                            <button @click="moveTask(item.title, 'in-progress')"
                                class="px-4 w-full relative py-3 rounded-lg bg-blue-700 bg-opacity-50 scale-100 transition-all cursor-pointer active:scale-95 hover:bg-opacity-40 flex items-center justify-between">
                                <p class="lg:text-base !m-0 p-0" v-text="item.title"></p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="w-full max-w-[500px] px-8 py-8 lg:w-1/3 h-[400px] lg:h-[300px] bg-orange-800 bg-opacity-50 border border-orange-800 rounded-lg lg:p-4">
                <h6 class="lg:text-xl">In Progress</h6>
                <ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] space-y-2 overflow-auto">
                    <template v-for="item in tasks.filter((task) => task.status == 'in-progress')">
                        <li class="list-none w-full">
                            <button @click="moveTask(item.title, 'done')"
                                class="px-4 w-full relative py-3 rounded-lg bg-yellow-700 bg-opacity-50 scale-100 transition-all cursor-pointer active:scale-95 hover:bg-opacity-40 flex items-center justify-between">
                                <p class="lg:text-base !m-0 p-0" v-text="item.title"></p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="w-full max-w-[500px] px-8 py-8 lg:w-1/3 h-[400px] lg:h-[300px] bg-green-800 bg-opacity-50 border border-green-800 rounded-lg lg:p-4">
                <h6 class="lg:text-xl">Done</h6>
                <ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] space-y-2 overflow-auto">
                    <template v-for="(item, i) in tasks.filter((task) => task.status == 'done')">
                        <li class="list-none w-full">
                            <button class="px-4 w-full relative py-3 rounded-lg bg-green-700 bg-opacity-50 scale-100 transition-all cursor-pointer active:scale-95 hover:bg-opacity-40 flex items-center justify-between">
                                <p class="lg:text-base !m-0 p-0" v-text="item.title"></p>
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
    { title: 'Task 1', status: 'todo' },
    { title: 'Task 2', status: 'todo' },
    { title: 'Task 3', status: 'todo' },
    { title: 'Task 4', status: 'in-progress' },
    { title: 'Task 5', status: 'in-progress' },
    { title: 'Task 6', status: 'done' },
    { title: 'Task 7', status: 'done' },
    { title: 'Task 8', status: 'done' },
]);

function moveTask(title: string, status: string) {
    const task = tasks.value.findIndex((t) => t.title === title);
    tasks.value[task].status = status;
}



</script>