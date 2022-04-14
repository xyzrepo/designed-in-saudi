<template>
    <PageHeadingBackground v-if="image" :image="image" />
    <div class="lg:flex lg:items-center lg:justify-between mb-4">
        <div class="flex-1 min-w-0">
            <slot name="breadcrumb"><PageHeadingBreadcrumb /></slot>
            <h2 v-if="title" class="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                {{ title }}
            </h2>
            <slot name="meta"><PageHeadingMeta v-if="meta" :meta="meta" /></slot>
        </div>
        <slot name="actions"><PageHeadingActions v-if="actions" :actions="actions" /></slot>
    </div>
        <slot/>
</template>

<script setup>
defineProps({
    title: String,
    meta: [Array, String],
    actions: Array,
    image: String
})
</script>