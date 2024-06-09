<template>
    <section>
        <div class="grid grid-cols-3 grid-rows-2 gap-4">
            <div
                class="w-full col-start-1 col-end-3 row-start-1 row-end-2 max-w-[600px] py-8 bg-green-800 bg-opacity-50 border border-green-800 rounded-lg flex items-center pl-24 relative">
                <div class="bg-green-700 px-3 py-1 rounded-lg absolute left-[1%] h-[90%] w-16 grid place-content-center">
                    <h6 class="-rotate-90 !m-0 w-max">Klassisch</h6>
                </div>
                <ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] !list-none [&_p]:relative [&_p]:pl-2 [&_p]:after:absolute [&_p]:after:w-2 [&_p]:after:rounded-full [&_p]:after:bg-white [&_p]:after:aspect-square [&_p]:after:right-full [&_p]:after:top-2">
                    <li class="w-full">
                        <p class="text-xl !m-0">
                            Umfang/kosten klar definiert
                        </p>
                    </li>
                    <li class="w-full">
                        <p class="text-xl !m-0">
                            Anforderungen werden zu Anfang erfasst
                        </p>
                    </li>
                    <li class="w-full">
                        <p class="text-xl !m-0">
                            Ergebnisse werden erst nach fertigstellung erfasst/bewertet
                        </p>
                    </li>
                    <li class="w-full">
                        <p class="text-xl !m-0">
                            Aufteilung d. Projekts in definierte Phasen
                        </p>
                    </li>
                </ul>
            </div>
            <div
                class="w-full col-start-2 col-end-4 row-start-2 row-end-3 max-w-[600px] py-8 bg-blue-800 bg-opacity-50 border border-blue-800 rounded-lg flex items-center pl-24 relative">
                <div class="bg-blue-700 px-3 py-1 rounded-lg absolute left-[1%] h-[90%] w-16 grid place-content-center">
                    <h6 class="-rotate-90 !m-0 w-max">Agil</h6>
                </div>
                <ul class="!m-0 w-full max-h-[255px] lg:max-h-[200px] !list-none [&_p]:relative [&_p]:pl-2 [&_p]:after:absolute [&_p]:after:w-2 [&_p]:after:rounded-full [&_p]:after:bg-white [&_p]:after:aspect-square [&_p]:after:right-full [&_p]:after:top-2">
                    <li class="w-full">
                        <p class="text-xl !m-0">
                            Zeit und Kosten werden während des Projektes individuell verteilt, der Umfang steht jedoch fest
                        </p>
                    </li>
                    <li class="w-full">
                        <p class="text-xl !m-0">
                            Anforderungen werden im laufenden Prozess erfasst
                        </p>
                    </li>
                    <li class="w-full">
                        <p class="text-xl !m-0">
                            Ergebnisse werden in regelmäßigen Abständen überprüft und bewerten
                        </p>
                    </li>
                    <li class="w-full">
                        <p class="text-xl !m-0">
                            Aufteilung des Projektes in Teilbereiche, welche jeweils alle Phasen einmal durchlaufen
                        </p>
                    </li>
                    <li class="w-full">
                        <p class="text-xl !m-0">
                            Regelmäßiger Austausch der unterschiedlichen Teams
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>