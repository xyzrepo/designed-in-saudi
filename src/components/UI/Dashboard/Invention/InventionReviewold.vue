<template>
  <div>
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">Invention Information</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">Review details before submission.</p>
    </div>
    <div class="mt-5 border-t border-gray-200">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div v-for="item in Object.keys(data)" :key="item" class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <span v-if="item === 'features' && !!data.features" role="list" class="divide-y divide-gray-200">
            <li v-for="(feature, i) in data.features" :key="i" class="py-1 flex flex-row hover:text-primary-700">
              <!-- <img class="h-10 w-10 rounded-full" :src="person.image" alt="" /> -->
              <!-- <div class="ml-3 w-full relative"> -->
              <span class="text-md font-medium text-gray-700 block">
                {{ feature.name }} ::
              </span>
              <span class="text-md font-light text-gray-700 pr-4 py-4 inline-block">{{ feature.value }}</span>
              <!-- </div> -->
            </li>
          </span>
          <dt class="text-sm font-medium text-gray-500 capitalize">{{ item.replace('_', ' ') }}</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ displayData(data[item]) }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { formData } from '@composables/useInvention';
// defineProps({ data: Object })
const data = formData.value
const displayData = value => {
  if (typeof value === 'string' && value) return value;
  // if (Array.isArray(value)) return value.map(entry => entry)
  else {
    if (value?.name && value?.description) return `${value.name} :: ${value.description}`
    else if (value?.name) return value.name
    else if (value?.description) return value.description
  }
}
</script>