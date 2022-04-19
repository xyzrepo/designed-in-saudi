<template>
    <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
        <div v-for="(item, index) in meta" :key="index" class="mt-2 flex items-center text-sm text-gray-500">
          <component :is="item.icon" v-if="item.icon" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          {{ item.text || item }}
        </div>
      </div>
</template>
<script setup>
defineProps({ 
    meta: { 
        type: Array,
        required: true
    }
})
</script>