<template>
<!-- Stats section -->
<div class="relative bg-gray-900">
<div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
    <div class="h-full w-full xl:grid xl:grid-cols-2">
    <div class="h-full xl:relative xl:col-start-2">
        <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="People working on laptops" />
        <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r" />
    </div>
    </div>
</div>
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
    <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
    <h2 class="text-sm font-semibold tracking-wide uppercase">
        <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">{{ title || 'Valuable Metrics'}}</span>
    </h2>
    <p class="mt-3 text-3xl font-extrabold text-white">{{ subtitle || 'Get actionable data that will help grow your business'}}</p>
    <p class="mt-5 text-lg text-gray-300">{{ description || 'Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.'}}</p>
    <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
        <p v-for="item in metrics" :key="item.id">
        <span class="block text-2xl font-bold text-white">{{ item.stat }}</span>
        <span class="mt-1 block text-base text-gray-300"
            ><span class="font-medium text-white">{{ item.emphasis }}</span> {{ item.rest }}</span
        >
        </p>
    </div>
    </div>
</div>
</div>
</template>
<script setup>
defineProps({ 
    title: String,
    subtitle: String,
    description: String,
    metrics: Array 
})
</script>