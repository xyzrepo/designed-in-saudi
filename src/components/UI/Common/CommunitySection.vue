<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div v-if="alt" class="overflow-hidden bg-gray-50">
        <div class="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <svg
                class="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true">
                <defs>
                    <pattern
                        id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse">
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-gray-200"
                            fill="currentColor" />
                    </pattern>
                </defs>
                <rect
                    width="404"
                    height="784"
                    fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
            </svg>

            <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div class="lg:col-span-1">
                    <h2
                        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {{ title || 'A better way to send money.' }}
                    </h2>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        {{
                            description ||
                            'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
                        }}
                    </p>
                </div>
                <dl
                    class="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
                    <div v-for="feature in features" :key="feature.name">
                        <dt>
                            <div
                                class="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                <component
                                    :is="feature.icon"
                                    class="h-6 w-6"
                                    aria-hidden="true" />
                            </div>
                            <p
                                class="mt-5 text-lg font-medium leading-6 text-gray-900">
                                {{ feature.name }}
                            </p>
                        </dt>
                        <dd class="mt-2 text-base text-gray-500">
                            {{ feature.description }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
    <div v-else class="bg-white py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
                <h2
                    class="text-base font-semibold uppercase tracking-wide text-indigo-600">
                    {{ title || 'title' }}
                </h2>
                <p
                    class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    {{ subtitle || 'A better way to send money' }}
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    {{
                        description ||
                        'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'
                    }}
                </p>
            </div>

            <div class="mt-10">
                <dl
                    class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                    <div
                        v-for="feature in features"
                        :key="feature.name"
                        class="relative">
                        <dt>
                            <div
                                class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                <component
                                    :is="feature.icon"
                                    class="h-6 w-6"
                                    aria-hidden="true" />
                            </div>
                            <p
                                class="ml-16 text-lg font-medium leading-6 text-gray-900">
                                {{ feature.name }}
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                            {{ feature.description }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    description: String,
    features: Array,
    alt: Boolean
})
</script>
