<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div v-for="item in navigation" :key="item.name" class="px-5 py-2">
          <a :href="item.href" class="text-2xl gradient font-extrabold text-gray-500 active:text-gray-900 hover:text-primary-900 underline-offset-8 decoration-8 hover:underline">
            {{ item.name }}
          </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center">
        <a v-for="item in socials" :key="item.name" :href="item.href" class="text-gray-400 hover:text-primary-500 px-1">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">&copy; 2022 XYZ, W.L.L. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { socials } from '@composables';

// const navigation = {
//   main: [
//     { name: 'About', href: '#' },
//     { name: 'Blog', href: '#' },
//     { name: 'Jobs', href: '#' },
//     { name: 'Press', href: '/press' },
//     // { name: 'Accessibility', href: '#' },
//     // { name: 'Partners', href: '/partners' },
//   ],
//   social: socials,
// }
defineProps({ navigation: Array })
</script>