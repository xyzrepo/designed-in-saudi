<template>
    <!-- <h1 class="text-2xl font-extrabold leading-1 tracking-tighter text-gray-900 sm:text-4xl sm:leading-1">
    The Other Layout
  </h1> -->
    <div class="relative overflow-hidden">
        <!-- <button @click="switchDir" class="w-52 ltr:text-l rtl:text-3xl tracking-tighter absolute rotate-45 leading-10 bg-gradient-to-r from-primary-500 to-indigo-900 text-center font-extrabold text-white z-10 top-6 -right-14">
      {{switchText}}
    </button> -->

        <router-view :dir="dir"></router-view>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const rtl = ref(false)
const dir = computed(() => (rtl.value ? 'rtl' : 'ltr'))
const switchText = computed(() => {
    if (!rtl.value) return 'النسخة العربية'
    else return 'English Version'
})
const switchDir = () => {
    if (rtl.value) {
        rtl.value = false
    } else {
        rtl.value = true
    }
}
</script>
