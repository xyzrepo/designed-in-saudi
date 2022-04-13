<template>
    <div>
        <img class="h-32 w-full object-cover lg:h-48 rounded-md mb-4" :src="image" alt="" />
    </div>
</template>
<script setup>
defineProps({ 
    image: { 
        type: String, 
        required: true 
    }
})
</script>