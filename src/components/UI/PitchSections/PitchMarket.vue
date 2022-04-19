<template>
    <section
        class="bg-gray-900 py-20 xl:py-24"
        :style="`background-image: url(${pattern}); background-position: center;`">
        <div class="container mx-auto px-4">
            <span
                class="rounded-9xl mb-4 inline-block bg-violet-100 py-px px-2 text-xs font-medium uppercase leading-5 text-violet-700">{{ subtitle }}</span>
            <h3
                class="mb-4 text-4xl font-bold tracking-tighter text-white md:text-4xl">
                {{ title }}
            </h3>
            <p
                class="mb-16 max-w-3xl text-lg font-medium text-gray-400 md:text-xl xl:mb-24">
                {{ description }}
            </p>
            <div class="-mx-4 flex flex-wrap items-center text-center">
                <div class="mb-16 w-full px-4 md:mb-0 md:w-1/2">
                    <div class="-mx-4 flex flex-wrap justify-center">
                        <div
                            v-for="(item, index) in items"
                            :key="index"
                            class="mb-8 w-full px-4 md:w-1/2">
                            <h2
                                class="mb-4 text-4xl font-bold tracking-tighter text-violet-600 lg:text-5xl">
                                {{ item.stat }}
                            </h2>
                            <h3
                                class="mb-2 text-lg font-bold text-gray-200 md:text-xl">
                                {{ item.description }}
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2">
                    <div class="relative mx-auto max-w-max md:mr-0">
                        <img
                            class="absolute -left-8 -top-8 z-10 w-28 text-yellow-400 md:w-auto"
                            src="/src/assets/images/elements/circle3-green.svg"
                            alt="" />
                        <img
                            class="absolute -right-7 -bottom-8 z-10 w-28 text-blue-500 md:w-auto"
                            src="/src/assets/images/elements/dots3-yellow.svg"
                            alt="" />
                        <img
                            class="rounded-3xl"
                            src="/src/assets/images/pitch/market-stats.jpg"
                            alt="market statistics"
                            width="599"
                            height="400" />
                        <!-- <img class="rounded-3xl" :src="marketStats" alt=""> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import pattern from '~/assets/images/elements/pattern-dark2.svg'
defineProps({
    title: String,
    subtitle: String,
    description: String,
    items: Array
})
</script>
