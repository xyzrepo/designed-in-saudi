<template>
  <div class="isolate -space-y-px rounded-md shadow-sm">
    <Title>Tech Specs</Title>
    
    <PrimaryButton @click="features.push({ name: 'New Feature', value: 'New Value' })">
        <PlusIcon class="h-5 w-5"/>
    </PrimaryButton>
    <div class="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
        v-for="(item, index) in features" :key="index">
      <label for="name" class="block text-xs font-medium text-gray-900">{{item.name}}</label>
      <input v-model="item.value" type="text" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" :placeholder="item.name" />
    </div>
  </div>
</template>
<script setup>
import {PlusIcon} from '@heroicons/vue/outline';
const features = ref([
    { name: 'Feature X', value: 'XXX' },
    { name: 'Feature Y', value: 'YYY' },
    { name: 'Feature Z', value: 'ZZZ' },
])
</script>