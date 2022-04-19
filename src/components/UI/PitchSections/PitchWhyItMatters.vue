<template>
    <section
        class="overflow-hidden bg-white py-24"
        :style="`background-image: url('${pattern}'); background-position: center;`">
        <div class="container mx-auto px-4">
            <div class="-mx-4 flex flex-wrap">
                <div class="mb-20 w-full px-4 md:w-1/2 lg:mb-0">
                    <div class="mx-auto">
                        <h2
                            class="font-heading md:leading-15 mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
                            {{ title }}
                        </h2>
                        <ul class="mb-8">
                            <li
                                v-for="(item, index) in items"
                                :key="index"
                                class="mb-4 flex items-center">
                                <img
                                    class="mr-3"
                                    src="/src/assets/images/elements/cta/checkbox-violet.svg"
                                    alt="" />
                                <span
                                    class="px-5 text-lg text-gray-500 ltr:pr-9 rtl:pl-9 md:text-2xl">{{ item }}</span>
                            </li>
                        </ul>
                        <div class="flex flex-wrap items-center"></div>
                    </div>
                </div>
                <div class="w-full px-4 md:w-1/2">
                    <div class="relative mx-auto max-w-max">
                        <img
                            class="absolute top-0 right-0 z-10 -mt-6 -mr-6 w-20 lg:-mt-12 lg:-mr-12 lg:w-auto"
                            src="/src/assets/images/elements/circle3-green.svg"
                            alt="" />
                        <img
                            class="lg:-mb-10-ml-6 absolute bottom-0 left-0 z-10 -mb-6 w-20 lg:-ml-12 lg:w-auto"
                            src="/src/assets/images/elements/dots3-yellow.svg"
                            alt="" />
                        <!-- <img class="rounded-3xl" :src="whyItMatters" alt=""> -->
                        <img
                            class="rounded-3xl"
                            src="/src/assets/images/pitch/why-it-matters.jpg"
                            alt="the book of whys"
                            width="600"
                            height="399" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import pattern from '~/assets/images/elements/pattern-white.svg'
defineProps({ title: String, items: Array })
</script>
