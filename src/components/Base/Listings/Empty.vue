<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="text-center">
    <component :is="icon" class="mx-auto h-12 w-12 text-gray-400 stroke-1" />
    <h3 class="mt-2 text-sm font-medium text-gray-900">No {{name}}s</h3>
    <p class="mt-1 text-sm text-gray-500">Get started by creating a new {{name}}.</p>
    <div class="mt-6">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 capitalize" @click="action">
        <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        New {{name}}
      </button>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon, FolderAddIcon } from '@heroicons/vue/outline'
defineProps({ name: String, action: Object, icon: { type: String, default: FolderAddIcon } })
</script>