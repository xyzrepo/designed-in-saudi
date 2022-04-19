<template>
  <div v-show="step === currentStep" class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">

        <span class="block">
          <!-- <span>{{`${steps[step]?.name ? steps[step].name+': ' : ''}`}}</span> -->
          {{ title }}
        </span>
        <span class="block text-2xl font-light">{{ subtitle }}</span>
      </h2>

      <slot />
      <div class="mt-8 flex justify-center">

        <div class="mr-3 inline-flex">
          <SecondaryButton v-if="step > 0" @click="prevStep">Go Back</SecondaryButton>
          <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"> Learn more </a> -->
        </div>

        <!-- <div class="inline-flex rounded-md shadow" v-if="typeof action?.fn === 'function'"> -->
        <div class="inline-flex rounded-md shadow">
          <PrimaryButton
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md"
            @click="action.fn">{{ action.name }}</PrimaryButton>
          <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Get started </a> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { steps, step as currentStep, prevStep, nextStep } from '@composables/useInvention';
const props = defineProps({
  step: { type: Number, default: () => -1 },
  title: String,
  subtitle: String,
  action: { type: Object, default: () => ({ name: 'Continue', fn: nextStep }) }
  // condition: { type: Boolean, default: true }
})
</script>