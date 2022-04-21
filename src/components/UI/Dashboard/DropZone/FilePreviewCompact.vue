<template>
    <div
        class="group block w-full aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img :src="item.url" :alt="item.file.name" :title="item.file.name"
            class="object-cover pointer-events-none group-hover:opacity-75" />
        <button @click="$emit('remove', item)" type="button" aria-label="Remove"
            class="relative float-right hover:text-gray-600/75 focus:outline-none rounded-full text-white/75 bg-transparent/10 hover:bg-gray-300/75 w-5 h-5">
            <XIcon class="stroke-2" />
            <span class="sr-only">Remove file {{ item.file.name }}</span>
        </button>
    </div>
    <p class="mt-2 pb-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        {{ item.file.name }}
        <span class="block text-sm font-medium text-gray-500 pointer-events-none">
            {{ `${(item.file.size / 1024 / 1024).toFixed(2)} MB` }}
        </span>
    </p>
</template>

<script setup>
import { XIcon } from "@heroicons/vue/outline";
defineEmits(["remove"]);
defineProps({
    item: { type: [String, Array, Object, Number, Function], required: true },
});
</script>
