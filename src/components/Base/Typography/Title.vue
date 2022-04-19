<template>
    <div
        :class="`font-heading mb-4 text-${size} font-extrabold leading-tight tracking-tight`">
        <slot />
    </div>
</template>
<script setup>
defineProps({
    size: {
        type: String,
        default: 'base',
        validator: size =>
            [
                'base',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                '2xl',
                '3xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl'
            ].includes(size)
    },
    color: { type: String },
    accent: { type: String }
})
</script>
