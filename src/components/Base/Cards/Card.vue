<template>
    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <slot>
            <div class="flex-shrink-0">
                <img
                    class="h-48 w-full object-cover"
                    :src="item.imageUrl"
                    alt="" />
            </div>
            <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                    <p class="text-sm font-medium text-indigo-600">
                        <a :href="item.category.href" class="hover:underline">
                            {{ item.category.name }}
                        </a>
                    </p>
                    <a :href="item.href" class="mt-2 block">
                        <p class="text-xl font-semibold text-gray-900">
                            {{ item.title }}
                        </p>
                        <p class="mt-3 text-base text-gray-500">
                            {{ item.description }}
                        </p>
                    </a>
                </div>
                <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                        <a :href="item.author.href">
                            <span class="sr-only">{{ item.author.name }}</span>
                            <img
                                class="h-10 w-10 rounded-full"
                                :src="item.author.imageUrl"
                                alt="" />
                        </a>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">
                            <a :href="item.author.href" class="hover:underline">
                                {{ item.author.name }}
                            </a>
                        </p>
                        <div class="flex space-x-1 text-sm text-gray-500">
                            <time :datetime="item.datetime">
                                {{ item.date }}
                            </time>
                            <span aria-hidden="true"> &middot; </span>
                            <span> {{ item.readingTime }} read </span>
                        </div>
                    </div>
                </div>
            </div>
        </slot>
    </div>
</template>

<script setup>
defineProps({ item: Object })
</script>
