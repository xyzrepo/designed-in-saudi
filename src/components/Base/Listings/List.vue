<template>
  <div class="bg-transparent overflow-hidden sm:rounded-md">
    <ul role="list" class="rounded-md space-y-2 mb-2">
      <li v-for="(item, index) in items" :key="index" :class="[{ 'border-primary-600 ring-2 ring-primary-600': selected === index }, 'active:bg-gray-100 hover:bg-gray-50 m-2 rounded-md shadow bg-white focus:outline-none relative' ]" @click="selected = index">
          <component :is="component" :item="item" />
      </li>
    </ul>
    {{items.filter((item, index) => index === selected)}}
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/outline';
const selected = ref(0)

defineProps({
  items: { type: Array },
  component: { type: Object }
})
</script>