<template>
<section class="py-24 bg-gray-900" :style="`background-image: url(${backgroundPattern}); background-position: center;`">
        <div class="container px-4 mx-auto">
          <div class="xl:max-w-4xl mb-12 mx-auto text-center">
            
            <h1 class="mb-4 text-3xl md:text-4xl leading-tight text-white font-bold tracking-tighter">{{title}}</h1>
            <p class="text-lg md:text-xl text-gray-400 font-medium">{{subtitle}}</p>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/3 px-4 lg:pt-6 mb-8 lg:mb-0">
              <div class="p-8 text-center hover:bg-gray-700 rounded-md hover:shadow-xl transition duration-200" v-for="(item, index) in items.slice(0, Math.ceil(items.length / 2))" :key="index">
                <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-gray-100 bg-violet-500 rounded-lg">
                  <component :is="item.icon" class="h-8 w-8" />
                </div>
                <div class="mb-4 text-xl md:text-2xl leading-tight text-white font-bold">{{ item.name }}</div>
                <p class="text-gray-400 font-medium">{{ item.description }}</p>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <!-- <img class="inline-flex mx-auto rounded-3xl" :src="valuePropositionImage" alt="lightbulb"> -->
                <img class="md:w-full mx-auto h-auto rounded-3xl" src="/src/assets/images/pitch/value-proposition.jpg" alt="lightbulb" width="400" height="600">
            </div>
            <div class="w-full lg:w-1/3 lg:pt-6 px-4">
              <div class="p-8 text-center hover:bg-gray-700 rounded-md hover:shadow-xl transition duration-200" v-for="(item, index) in items.slice(-Math.ceil(items.length / 2))" :key="index">
                <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-gray-100 bg-violet-500 rounded-lg">
                  <component :is="item.icon" class="h-8 w-8"/>
                </div>
                <div class="mb-4 text-xl md:text-2xl leading-tight text-white font-bold">{{ item.name }}</div>
                <p class="text-gray-400 font-medium">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<script setup>
import backgroundPattern from '~/assets/images/elements/pattern-dark2.svg'
defineProps({ title: String,subtitle: String, items: Array })
</script>