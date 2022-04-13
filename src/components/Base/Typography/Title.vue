<template>
    <div :class="`mb-4 font-heading text-${size} tracking-tight leading-tight font-extrabold`">
            <slot/>
    </div>
</template>
<script setup>

defineProps({ 
    size: {
        type: String,
        default: 'base',
        validator: size => ['base','xs', 'sm','md','lg','xl','2xl','3xl','4xl','5xl','6xl','7xl','8xl','9xl'].includes(size)
    },
    color: {
        type: String
    },
    accent: {
        type: String
    }
})
</script>