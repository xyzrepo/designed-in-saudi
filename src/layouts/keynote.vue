<template>
  <!-- <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
    The Other Layout
  </h1> -->
  <button @click="switchDir" class="w-52 tracking-tighter rotate-45 leading-10 absolute bg-gradient-to-r from-primary-500 to-indigo-900 text-center font-extrabold text-2xl text-white z-10 top-6 -right-12">
    {{switchText}}
  </button>
  <router-view :dir="dir"></router-view>
  
</template>
<script setup>
import { ref, computed } from 'vue'
const rtl = ref(false)
const dir = computed(() => rtl.value ? 'rtl' : 'ltr')
const switchText = computed(() => {
  if (!rtl.value) return 'بالعربي'
  else return 'English'
})
const switchDir = () => {
  if (rtl.value) { 
    rtl.value = false
  }
  else { 
    rtl.value = true
  }
}
</script>