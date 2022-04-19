<template>
    <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div class="absolute inset-0">
                    <img
                        class="h-full w-full object-cover"
                        src="/src/assets/images/workshop.jpg"
                        alt="3d printing workshop" />
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                </div>
                <div
                    class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1
                        class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span class="block text-white">{{ title }}</span>
                        <span
                            class="block text-2xl text-indigo-200 sm:text-4xl">{{ subtitle }}</span>
                    </h1>
                    <p
                        class="mx-auto mt-6 max-w-lg text-center text-2xl font-light text-indigo-200 sm:max-w-3xl">
                        {{ description }}
                    </p>
                    <div
                        class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                        <!-- <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"> Get started </a>
            <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a>
          </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: { type: String, default: 'The Invention Hub' },
    subtitle: { type: String, default: 'Where ideas come to life' },
    description: {
        type: String,
        default:
            'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
    }
})
</script>
