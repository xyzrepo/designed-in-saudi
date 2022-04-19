<template>
    <div>
        <img
            class="mb-4 h-32 w-full rounded-md object-cover lg:h-48"
            :src="image"
            alt="" />
    </div>
</template>
<script setup>
defineProps({ image: { type: String, required: true } })
</script>
