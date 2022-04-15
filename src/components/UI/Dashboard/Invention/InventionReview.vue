<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">Invention Information</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">Review details before confirmation.</p>
    </div>
    <div class="mt-5 border-t border-gray-200">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4" v-for="item in Object.keys(data)" >
          <dt class="text-sm font-medium text-gray-500 capitalize">{{item}}</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{displayData(data[item])}}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon } from '@heroicons/vue/solid'
defineProps({ data: Object })
const displayData = value => {
  if (typeof value === 'string' && value) return value;
  else {
    if (value?.name && value?.description) return value.name+" :: "+value.description
    else if (value?.name !== "") return value.name
    else if (value?.description !== "") return value.description
  } 
}
</script>