<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div v-if="show" class="relative bg-indigo-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="md:hidden"> {{title}} </span>
          <span class="hidden md:inline"> {{subtitle}} </span>
          <span class="block sm:ml-2 sm:inline-block">
            <a :href="url || '#'" class="text-white font-bold underline"> 
              <!-- <ExternalLinkIcon class="h-6 w-6" aria-hidden="true"/> -->
              Learn more <span aria-hidden="true">&rarr;</span>
            </a>
          </span>
        </p>
      </div>
      <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
        <button @click="show = false" type="button" class="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">
          <span class="sr-only">Dismiss</span>
          <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XIcon, ExternalLinkIcon } from '@heroicons/vue/outline'
import { ref } from 'vue';
const show = ref(true)
defineProps({
  title: {
    type: String,
    default: "We announced a new product!"
  },
  subtitle: {
    type: String,
    default: "Big news! We're excited to announce a brand new project."
  },
  url: String
})
</script>