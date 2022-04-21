<template>
    <!-- Tabs -->
    <!-- <Tabs v-model="activeTab" :tabs="tabs" v-model:activeDisplayMode="activeDisplayMode" /> -->
    <!-- Gallery -->
    <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" class="sr-only">{{ activeTab.name }}</h2>
        <!-- activeTab.slug === tab.slug -->
        <ul role="list" v-for="(tab, index) in tabs" :key="index" v-show="activeTab.slug === tab.slug"
            class="p-2 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-x-3 lg:grid-cols-4 xl:gap-x-4">
            <slot>
                <li v-for="file in modelValue.filter(f => f.meta.activeTab.slug === activeTab.slug)" :key="file.id"
                    class="relative">
                    <FilePreview :item="file" @remove="$emit('remove', file)"
                        @moreDetails="$emit('moreDetails', file)" />
                </li>
            </slot>
        </ul>
    </section>

</template>

<script setup>
const open = ref(false)
const props = defineProps({ modelValue: [String, Array, Object, Number, Function], tabs: Array, activeTab: Object })
defineEmits(['update:modelValue', 'remove', 'moreDetails'])
</script>