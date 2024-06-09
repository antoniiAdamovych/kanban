<template>
    <section ref="section">
        <template v-if="!started">
            <div class="h-[400px] grid place-content-center">
                <h2>Quiz</h2>
                <button @click="started = true"
                    class="bg-gray-800 bg-opacity-50 border border-gray-800 px-4 py-2 text-base rounded-lg">Start
                    Quiz</button>
            </div>
        </template>
        <template v-if="started">
            <div class="h-[400px] grid place-content-center" v-if="questions && questions.length > activeQuestion">
                <h6 class="text-4xl !mb-10">{{ questions[activeQuestion].frage }}</h6>
                <div class="grid grid-cols-2 px-20 gap-4">
                    <template v-for="(question, i) in questions[activeQuestion].optionen">
                        <div>
                            <label @click="showStatus ? '' : HandleChange(question.id, questions[activeQuestion].id)"
                                :class="`cursor-pointer px-4 py-2 grid place-content-center bg-opacity-50 border min-h-[80px] rounded-lg ${currentQuestion.selected == question.id ? 'bg-blue-800 border-blue-800' : ''} ${showStatus && currentQuestion.selected == question.id && currentQuestion.isRight ? 'bg-green-800 border-green-800' : showStatus && currentQuestion.selected == question.id && !currentQuestion.isRight ? 'bg-red-800 border-red-800' : ''}`">
                                <span class="text-base !m-0">{{ (i + 1).toString() }}. {{ question.text }}</span>
                            </label>
                        </div>
                    </template>
                </div>
                <button @click="HandleAnswer" :disabled="!currentQuestion.selected"
                    class="disabled:opacity-60 disabled:cursor-not-allowed w-max mt-6 mx-auto bg-gray-800 bg-opacity-50 border border-gray-800 px-4 py-2 text-base rounded-lg">Absenden</button>
            </div>
            <div v-else class="h-[400px] grid place-content-center">
                <h2>Ergebnis</h2>
                <p>Du hast {{ result }} von {{ questions.length }} Fragen richtig beantwortet!</p>
            </div>
        </template>

    </section>
</template>

<script setup lang="ts">

import { poof } from '../../animation';
import { ref, onMounted } from 'vue';

const started = ref(false);
const activeQuestion = ref(0);

const section = ref<null | HTMLElement>(null);

const currentQuestion = ref({
    id: 0,
    selected: "",
    isRight: false
})

type Question = {
    id: number;
    frage: string;
    optionen: {
        id: string;
        text: string;
    }[]
}

const result = ref(0);
const questions = ref<Question[]>([]);

onMounted(async () => {
    const res = await fetch('/api/questions').then(res => res.json()).catch(err => console.error(err)) as Question[];

    if (res) {
        questions.value = res;
    }
})

const status = ref("");
const showStatus = ref(false);

function HandleChange(opt_id: string, question_id: number) {
    currentQuestion.value.id = question_id;
    currentQuestion.value.selected = opt_id;
}

async function HandleAnswer() {
    if (currentQuestion.value.selected == "") {
        status.value = "Bitte wähle eine Antwort aus!"
        return;
    }

    type ResType = {
        correct: boolean;
    }

    const res = await fetch('/api/answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: currentQuestion.value.id,
            answer: currentQuestion.value.selected
        })
    }).then(res => res.json()).catch(err => console.error(err)) as ResType;

    if (res.correct) {
        status.value = "Richtig!"
        result.value++;
        currentQuestion.value.isRight = true;
    } else {
        status.value = "Falsch!"
        currentQuestion.value.isRight = false;
    }

    showStatus.value = true;

    setTimeout(() => {
        showStatus.value = false;
        activeQuestion.value++;
        currentQuestion.value.id = 0;
        currentQuestion.value.selected = "";

        if (questions.value.length == activeQuestion.value) {
            poof();
            return;
        }
    }, 1000)
}
</script>