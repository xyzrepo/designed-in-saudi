<template>
    <section
        class="bg-gray-50 py-24"
        :style="`${
            'background-image: url(' +
            pattern +
            '); background-position: center;'
        }`">
        <div class="container mx-auto px-4">
            <div class="mx-auto mb-12 text-center xl:max-w-4xl">
                <h1
                    class="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                    {{ title }}
                </h1>
                <p class="text-lg font-medium text-gray-500 md:text-xl">
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
                        class="rounded-md p-8 text-center transition duration-200 hover:bg-white hover:shadow-xl lg:mb-6">
                        <div
                            class="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-white">
                            <component :is="item.icon" class="h-8 w-8" />
                        </div>
                        <div
                            class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                            {{ item.name }}
                        </div>
                        <p class="font-medium text-gray-500">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
                <div class="mb-8 w-full px-4 lg:mb-0 lg:w-1/3">
                    <img
                        class="mx-auto rounded-3xl"
                        src="/src/assets/images/pitch/community.jpg"
                        alt="community"
                        width="400"
                        height="600" />
                </div>
                <div class="w-full px-4 lg:w-1/3 lg:pt-6">
                    <div
                        v-for="(item, index) in items.slice(
                            -Math.ceil(items.length / 2)
                        )"
                        :key="index"
                        class="rounded-md p-8 text-center transition duration-200 hover:bg-white hover:shadow-xl lg:mb-6">
                        <div
                            class="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-violet-500 text-white">
                            <component :is="item.icon" class="h-8 w-8" />
                        </div>
                        <div
                            class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                            {{ item.name }}
                        </div>
                        <p class="font-medium text-gray-500">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import pattern from '~/assets/images/elements/pattern-light-big.svg'
defineProps({ title: String, subtitle: String, items: Array })
</script>
