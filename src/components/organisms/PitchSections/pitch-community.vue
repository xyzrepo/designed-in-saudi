<template>
  <section class="py-24 bg-gray-50" style="background-image: url('/flex-ui-assets/elements/pattern-light-big.svg'); background-position: center;">
      <div class="container px-4 mx-auto">
          <div class="xl:max-w-4xl mb-12 mx-auto text-center">
              <h1 class="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">The Community</h1>
              <p class="text-lg md:text-xl text-gray-500 font-medium">Our Partners in Success</p>
          </div>
          <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-1/3 px-4 lg:pt-6 mb-8 lg:mb-0">
                  <div class="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                      <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                          <LightBulbIcon class="h-8 w-8" />
                      </div>
                      <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">Creators</h3>
                      <p class="text-gray-500 font-medium">Individual or group, DIY enthusiasts, or professional designers with product ideas</p>
                  </div>
                  <div class="p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                      <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                          <UserGroupIcon class="h-8 w-8" />
                      </div>
                      <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">Partners Network</h3>
                      <p class="text-gray-500 font-medium">Our connection from manufacturers, retailers, logistic providers...etc
                      </p>
                  </div>
              </div>
              <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                  <img class="mx-auto" src="/flex-ui-assets/images/features/stock.png" alt="">
              </div>
              <div class="w-full lg:w-1/3 lg:pt-6 px-4">
                  <div class="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                      <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                          <UsersIcon class="h-8 w-8" />
                      </div>
                      <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">Sponsers</h3>
                      <p class="text-gray-500 font-medium">Individuals looking for short-term investment opportunities with low risks</p>
                  </div>
                  <div class="p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                      <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg">
                          <HeartIcon class="h-8 w-8" />
                      </div>
                      <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">Valuable Customers</h3>
                      <p class="text-gray-500 font-medium">The end consumers who buy the end products thru our e-commerce channels</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script setup>
import { HeartIcon, UsersIcon, UserGroupIcon, LightBulbIcon } from '@heroicons/vue/outline'
</script>