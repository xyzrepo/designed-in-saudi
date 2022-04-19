<template>
    <div
        class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div
            v-for="(item, index) in meta"
            :key="index"
            class="mt-2 flex items-center text-sm text-gray-500">
            <component
                :is="item.icon"
                v-if="item.icon"
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true" />
            {{ item.text || item }}
        </div>
    </div>
</template>
<script setup>
defineProps({ meta: { type: Array, required: true } })
</script>
