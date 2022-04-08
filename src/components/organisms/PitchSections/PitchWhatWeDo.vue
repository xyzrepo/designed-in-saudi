<template>
    <section class="py-24 md:py-32 bg-white overflow-hidden" style="background-image: url('/src/assets/images/elements/pattern-white.svg'); background-position: center;">
        <div class="container px-4 mx-auto">
            <div class="flex flex-wrap lg:items-center -mx-4">
                <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                    <h1 class="mb-8 text-4xl md:text-5xl leading-tight text-gray-900 font-bold tracking-tighter">{{ title }}</h1>
                    <p class="mb-6 text-lg md:text-2xl text-gray-500">{{ description }}</p>
                </div>
                <div class="w-full md:w-1/2 px-4">
                    <div class="relative mx-auto md:mr-0 max-w-max">
                        <img class="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400" src="/src/assets/images/elements/circle3-green.svg" alt="">
                        <img class="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500" src="/src/assets/images/elements/dots3-yellow.svg" alt="">
                        <!-- <img class="rounded-3xl" :src="whatWeDo" alt=""> -->
                        <img class="rounded-3xl" src="/src/assets/images/pitch/what-we-do.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
// import { whatWeDo } from '~/components/composables/usePitchImages';
defineProps({ title: String, description: String })
</script>