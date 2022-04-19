<template>
    <section
        class="bg-gray-900 py-24"
        :style="`background-image: url(${backgroundPattern}); background-position: center;`">
        <div class="container mx-auto px-4">
            <div class="mx-auto mb-12 text-center xl:max-w-4xl">
                <h1
                    class="mb-4 text-3xl font-bold leading-tight tracking-tighter text-white md:text-4xl">
                    {{ title }}
                </h1>
                <p class="text-lg font-medium text-gray-400 md:text-xl">
                    {{ subtitle }}
                </p>
            </div>
            <div class="-mx-4 flex flex-wrap">
                <div class="mb-8 w-full px-4 lg:mb-0 lg:w-1/3 lg:pt-6">
                    <div
                        v-for="(item, index) in items.slice(
                            0,
                            Math.ceil(items.length / 2)
                        )"
                        :key="index"
                        class="rounded-md p-8 text-center transition duration-200 hover:bg-gray-700 hover:shadow-xl">
                        <div
                            class="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-gray-100">
                            <component :is="item.icon" class="h-8 w-8" />
                        </div>
                        <div
                            class="mb-4 text-xl font-bold leading-tight text-white md:text-2xl">
                            {{ item.name }}
                        </div>
                        <p class="font-medium text-gray-400">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
                <div class="mb-8 w-full px-4 lg:mb-0 lg:w-1/3">
                    <!-- <img class="inline-flex mx-auto rounded-3xl" :src="valuePropositionImage" alt="lightbulb"> -->
                    <img
                        class="mx-auto h-auto rounded-3xl md:w-full"
                        src="/src/assets/images/pitch/value-proposition.jpg"
                        alt="lightbulb"
                        width="400"
                        height="600" />
                </div>
                <div class="w-full px-4 lg:w-1/3 lg:pt-6">
                    <div
                        v-for="(item, index) in items.slice(
                            -Math.ceil(items.length / 2)
                        )"
                        :key="index"
                        class="rounded-md p-8 text-center transition duration-200 hover:bg-gray-700 hover:shadow-xl">
                        <div
                            class="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-gray-100">
                            <component :is="item.icon" class="h-8 w-8" />
                        </div>
                        <div
                            class="mb-4 text-xl font-bold leading-tight text-white md:text-2xl">
                            {{ item.name }}
                        </div>
                        <p class="font-medium text-gray-400">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import backgroundPattern from '~/assets/images/elements/pattern-dark2.svg'
defineProps({ title: String, subtitle: String, items: Array })
</script>
