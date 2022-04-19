<template>
    <div>
        <div>
            <a :href="item.category.href" class="inline-block">
                <span
                    :class="[
                        item.category.color,
                        'inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium'
                    ]">
                    <slot name="header">{{ item.category.name }}</slot>
                </span>
            </a>
        </div>

        <slot>
            <a :href="item.href" class="mt-4 block">
                <p class="text-xl font-semibold text-gray-900">
                    {{ item.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                    {{ item.description }}
                </p>
            </a>
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
                        <a :href="item.author.href">
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
        </slot>
    </div>
</template>

<script setup>
defineProps({ item: Object })
</script>
