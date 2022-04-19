<template>
  <!-- Logo cloud on brand -->
  <!-- <div v-if="!altStyle" class="bg-purple-600">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div class="lg:space-y-10">
        <h2 class="text-3xl font-extrabold text-white">{{ title }}</h2>
        <div class="mt-8 flow-root lg:mt-0">
          <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div
              v-for="logo in logos"
              :key="logo.name"
              class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
            >
              <img class="h-12" :src="logo.url" :alt="logo.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
        {{ title }}
      </p>
      <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div v-for="logo in logos" :key="logo.name" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-12" :src="logo.url" :alt="logo.name" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  logos: {
    type: Array,
    default: () => [
      { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-purple-200.svg' },
      { name: 'Mirage', url: 'https://tailwindui.com/img/logos/mirage-logo-purple-200.svg' },
      { name: 'StaticKit', url: 'https://tailwindui.com/img/logos/statickit-logo-purple-200.svg' },
      { name: 'Transistor', url: 'https://tailwindui.com/img/logos/transistor-logo-purple-200.svg' },
      { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-purple-200.svg' }]
  },
  altStyle: { type: Boolean, default: false }
})
</script>
