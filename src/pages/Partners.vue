<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <BrandedHeading 
    :title="content.platform.intro.title"
    :subtitle="content.platform.intro.subtitle"
  />
  <nav class="h-full overflow-y-auto" aria-label="Directory">
    <div v-for="partner in content.partners.network.filter(p => ['Design','Manufacturing'].includes(p.role))" :key="partner.role" class="relative">
      <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
        <h3>{{ partner.role }}</h3>
      </div>
      <ul role="list" class="relative z-0 divide-y divide-gray-200">
        <li v-for="person in content.partners.network.filter(p => p.role == role)" :key="person.id" class="bg-white">
          <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
            </div>
            <div class="flex-1 min-w-0">
              <a href="#" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">
                  {{ person.name }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  {{ person.role }}
                </p>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import content from '@/components/composables/useContent';
const directory = [
    
  ]
</script>
<route>
{
  meta: {
    layout: 'blank'
  }
}
</route>