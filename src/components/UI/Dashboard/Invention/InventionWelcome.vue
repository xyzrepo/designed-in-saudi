<template>
    <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">{{title}}</span>
        <span class="block">{{subtitle}}</span>
      </h2>
      
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow" v-if="action.fn">
            <PrimaryButton @click="action.fn" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md">{{action.name}}</PrimaryButton>
          <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Get started </a> -->
        </div>
        <!-- <div class="ml-3 inline-flex">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"> Learn more </a>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  subtitle: String,
  action: Object
})
</script>