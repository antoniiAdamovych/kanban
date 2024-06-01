<template>
    <section id="kanbanDefinition" class="group">
        <h2 :class="`absolute top-1/2 -translate-y-1/2 group-has-[:not(.fragment:not(.visible))]:lg:-top-full group-has-[.current-fragment]:-top-1/2 group-has-[.current-fragment]:-translate-y-0 left-1/2 -translate-x-1/2 w-max transition-all ease-in-out duration-300 `">
            Customizing</h2>
        <ul style="--gap: 1rem;" class="!flex items-start flex-wrap w-full px-20 ">
            <li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none">
                <p class="lg:text-base">Farbkodierte Post-its für Teammitglieder.</p>
            </li>
            <li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none">
                <p class="lg:text-base">Symbole zur Projektzuordnung.</p>
            </li>
            <li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none">
                <p class="lg:text-base">Prioritäten durch Farben kennzeichnen.</p>
            </li>
            <li class="fragment w-full lg:w-[calc(50%_-_var(--gap))] lg:list-none bg-purple-900 px-4 rounded-lg">
                <p class="lg:text-base">Zusätzliche Spalten für Analyse- oder Zwischenschritte.</p>
            </li>
        </ul>
    </section>
</template>