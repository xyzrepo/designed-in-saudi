<template>
  <section class="py-24 bg-gray-50" :style="`${ 'background-image: url('+pattern+'); background-position: center;' }`">
      <div class="container px-4 mx-auto">
          <div class="xl:max-w-4xl mb-12 mx-auto text-center">
              <h1 class="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">{{ title }}</h1>
              <p class="text-lg md:text-xl text-gray-500 font-medium">{{ subtitle }}</p>
          </div>
          <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-1/3 px-4 lg:pt-6 mb-8 lg:mb-0">
                  <div v-for="(item, index) in items.slice(0, Math.ceil(items.length / 2))" :key="index" class="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                      <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                          <component :is="item.icon" class="h-8 w-8" />
                      </div>
                      <div class="mb-4 text-xl md:text-2xl leading-tight font-bold">{{ item.name }}</div>
                      <p class="text-gray-500 font-medium">{{ item.description }}</p>
                  </div>
              </div>
              <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                  <img class="rounded-3xl mx-auto" src="/src/assets/images/pitch/community.jpg" alt="community" width="400" height="600">
              </div>
              <div class="w-full lg:w-1/3 lg:pt-6 px-4">
                  <div v-for="(item, index) in items.slice(-Math.ceil(items.length / 2))" :key="index" class="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                      <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                          <component :is="item.icon" class="h-8 w-8" />
                      </div>
                      <div class="mb-4 text-xl md:text-2xl leading-tight font-bold">{{ item.name }}</div>
                      <p class="text-gray-500 font-medium">{{ item.description }}</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script setup>
import pattern from '~/assets/images/elements/pattern-light-big.svg'
defineProps({ title: String, subtitle: String, items: Array })
</script>