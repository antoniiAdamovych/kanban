<template>
    <section class="group">
        <div
            class="icon absolute transition-all duration-300 group-has-[.fragment.visible]:right-4 group-has-[.fragment.visible]:top-4 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
            ⚡️</div>
        <div class="fragment">
            <h2>Efficiency</h2>
            <div class="w-full">
                <Swiper :modules="modules">
                    <SwiperSlide>
                        <img class="w-full !max-h-[500px] object-contain" src="/assets/checkbox.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="w-full rounded-lg mx-auto" src="/assets/empty.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="w-full h-full !max-h-[450px] object-contain rounded-lg mx-auto" src="/assets/Progress.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="w-full h-full !max-h-[450px] object-contain rounded-lg mx-auto" src="/assets/CHILL.png" alt="">
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules'

const modules = [Pagination]

</script>