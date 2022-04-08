<template>
  <section class="py-24 overflow-hidden bg-white" :style="`background-image: url('${pattern}'); background-position: center;`">
      <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4">
              <div class="w-full md:w-1/2 px-4 mb-20 lg:mb-0">
                  <div class="mx-auto">
                      <h2 class="mb-8 text-4xl md:text-5xl font-heading font-bold text-gray-900 md:leading-15">{{title}}</h2>
                      <ul class="mb-8">
                          <li class="flex items-center mb-4" v-for="(item, index) in items" :key="index">
                              <img class="mr-3" src="/src/assets/images/elements/cta/checkbox-violet.svg" alt="">
                              <span class="px-5 ltr:pr-9 rtl:pl-9 text-lg md:text-2xl text-gray-500">{{ item }}</span>
                          </li>
                      </ul>
                      <div class="flex flex-wrap items-center"></div>
                  </div>
              </div>
              <div class="w-full md:w-1/2 px-4">
                  <div class="relative max-w-max mx-auto">
                      <img class="absolute top-0 right-0 -mt-6 lg:-mt-12 -mr-6 lg:-mr-12 w-20 lg:w-auto z-10" src="/src/assets/images/elements/circle3-green.svg" alt="">
                      <img class="absolute bottom-0 left-0 -mb-6 lg:-mb-10-ml-6 lg:-ml-12 w-20 lg:w-auto z-10" src="/src/assets/images/elements/dots3-yellow.svg" alt="">
                      <!-- <img class="rounded-3xl" :src="whyItMatters" alt=""> -->
                      <img class="rounded-3xl" src="/src/assets/images/pitch/why-it-matters.jpg" alt="the book of whys" width="600" height="399">
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script setup>
import pattern from '~/assets/images/elements/pattern-white.svg'
// import { whyItMatters } from '~/components/composables/usePitchImages';
defineProps({ title: String, items: Array })
</script>