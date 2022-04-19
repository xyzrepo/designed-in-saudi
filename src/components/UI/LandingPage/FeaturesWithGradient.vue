<template>
    <div class="bg-gradient-to-r from-purple-800 to-indigo-700">
        <div
            class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 class="text-3xl font-extrabold tracking-tight text-white">
                {{ title }}
            </h2>
            <p class="mt-4 max-w-3xl text-lg text-purple-200">
                {{ subtitle }}
            </p>
            <div
                class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                <div v-for="feature in features" :key="feature.name">
                    <div>
                        <span
                            class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                            <component
                                :is="feature.icon"
                                class="h-6 w-6 text-white"
                                aria-hidden="true" />
                        </span>
                    </div>
                    <div class="mt-6 text-center">
                        <h3 class="text-lg font-medium text-white">
                            {{ feature.name }}
                        </h3>
                        <p class="mt-2 text-base text-purple-200">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({ title: String, subtitle: String, features: Array })
</script>
