<template>
    <component
    :is="attrs.href ? 'a' : 'button'"
    :class="variantClass"
    >
    <slot/>
    </component>
</template>
<script setup>
import { computed, useAttrs } from 'vue';
const secondaryClass = [
    'inline-flex',
    'items-center justify-center',
    'px-5 py-3 border border-transparent',
    'text-base font-medium',
    'rounded-md',
    'text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
].join(" ")
const brandClass = [
    'shadow-sm',
    'bg-gradient-to-r from-purple-600 to-indigo-600', 
    'bg-origin-border border border-transparent rounded-md', 
    'shadow-sm', 
    'text-base font-medium text-white text-sm', 
    'hover:from-purple-700 hover:to-indigo-700', 
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    ].join(" ")
const buttonClass = 'w-full flex justify-center py-2 px-4'
const linkClass = 'ml-8 whitespace-nowrap inline-flex items-center justify-center py-2 px-4'
const variantClass = computed(() => {
    if (attrs.href) return `${linkClass} ${secondaryClass}`
    return `${buttonClass} ${secondaryClass}`
})
const attrs = useAttrs()
</script>
