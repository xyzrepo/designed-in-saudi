<template>
    <Section v-if="alt" class="bg-gradient-to-r from-purple-800 to-indigo-700">
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-base font-semibold uppercase tracking-wider text-white">
                {{ title || "Deploy faster" }}
            </h2>
            <p class="mt-2 text-3xl font-extrabold tracking-tight text-purple-200 sm:text-4xl">
                {{ subtitle || "Everything you need to deploy your app" }}
            </p>
            <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                {{ description || "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla." }}
            </p>
            <div class="mt-12">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div v-for="feature in features" :key="feature.name" class="pt-6">
                        <div class="flow-root rounded-lg px-6 pb-8">
                            <div class="-mt-6">
                                <div>
                                    <span class="inline-flex items-center justify-center rounded-md bg-white bg-opacity-10 p-3 shadow-lg">
                                            <component :is="feature.icon" class="h-12 w-12 text-white" aria-hidden="true" />
                                        </span>
                                </div>
                                <h3 class="mt-8 text-lg font-medium tracking-tight text-white">
                                    {{ feature.name }}
                                </h3>
                                <p class="mt-5 text-base text-purple-200">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
    <Section v-else class="bg-white">
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-base font-semibold uppercase tracking-wider text-indigo-600">
                {{ title || "Deploy faster" }}
            </h2>
            <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {{ subtitle || "Everything you need to deploy your app" }}
            </p>
            <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                {{ description || "Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla." }}
            </p>
            <div class="mt-12">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div v-for="feature in features" :key="feature.name" class="pt-6">
                        <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                            <div class="-mt-6">
                                <div>
                                    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                                            <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                </div>
                                <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">
                                    {{ feature.name }}
                                </h3>
                                <p class="mt-5 text-base text-gray-500">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    description: String,
    features: Array,
    alt: Boolean,
});
</script>
