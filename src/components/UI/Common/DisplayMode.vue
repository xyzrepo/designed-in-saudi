<template>
    <div class="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
        <button v-for="(item, index) in displayTypes" :key="index" type="button" @click="setDisplayMode(index)"
            :class="{ 'bg-white': activeDisplayIndex === index }"
            class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500">
            <component :is="item.icon" class="h-5 w-5" aria-hidden="true" />
            <span class="sr-only">Use {{ item.name }}</span>
        </button>
    </div>
</template>
<script setup>
import { ViewGridIcon, ViewListIcon } from "@heroicons/vue/solid";
const displayTypes = [
    { name: "Grid View", component: "FilePreview", icon: ViewGridIcon },
    { name: "List View", component: "FilePreviewCompact", icon: ViewListIcon },
];
const activeDisplayIndex = ref(null);
const emit = defineEmits(["update:modelValue"]);
const setDisplayMode = (index) => {
    activeDisplayIndex.value = index;
    emit("update:modelValue", displayTypes[activeDisplayIndex.value]);
    // displayTypes.find((item) => item.id === activeDisplayMode.value)
};
defineProps({ modelValue: [String, Object, Number, Array, Function] });
setDisplayMode(0)
</script>
