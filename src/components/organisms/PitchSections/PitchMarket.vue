<template>
  <section class="py-20 xl:py-24 bg-gray-900" :style="`background-image: url(${pattern}); background-position: center;`">
      <div class="container px-4 mx-auto">
          <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-700 bg-violet-100 font-medium uppercase rounded-9xl">{{ subtitle }}</span>
          <h3 class="mb-4 text-4xl md:text-4xl text-white font-bold tracking-tighter">{{ title }}</h3>
          <p class="mb-16 xl:mb-24 text-lg md:text-xl text-gray-400 font-medium max-w-3xl">{{ description }}</p>
          <div class="flex flex-wrap items-center -mx-4 text-center">
              <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  <div class="flex flex-wrap justify-center -mx-4">
                      <div class="w-full md:w-1/2 px-4 mb-8" v-for="(item, index) in items" :key="index">
                          <h2 class="mb-4 text-4xl lg:text-5xl text-violet-600 font-bold tracking-tighter">{{ item.stat }}</h2>
                          <h3 class="mb-2 text-lg md:text-xl text-gray-200 font-bold">{{ item.description }}</h3>
                      </div>
                  </div>
              </div>
              <div class="w-full md:w-1/2 px-4">
                  <div class="relative mx-auto md:mr-0 max-w-max">
                      <img class="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400" src="/src/assets/images/elements/circle3-green.svg" alt="">
                      <img class="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500" src="/src/assets/images/elements/dots3-yellow.svg" alt="">
                      <img class="rounded-3xl" src="/src/assets/images/pitch/market-stats.jpg" alt="market statistics">
                      <!-- <img class="rounded-3xl" :src="marketStats" alt=""> -->
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script setup>
// import { marketStats } from '~/components/composables/usePitchImages';
import pattern from '~/assets/images/elements/pattern-dark2.svg'

defineProps({ title: String, subtitle: String, description: String, items: Array })
</script>