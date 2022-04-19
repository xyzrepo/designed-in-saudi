<template>
    <section
        class="overflow-hidden bg-white py-24 md:py-32"
        :style="`background-image: url('${pattern}'); background-position: center;`">
        <div class="container mx-auto px-4">
            <div class="-mx-4 flex flex-wrap lg:items-center">
                <div class="mb-16 w-full px-4 md:mb-0 md:w-1/2">
                    <h1
                        class="mb-8 text-4xl font-bold leading-tight tracking-tighter text-gray-900 md:text-5xl">
                        {{ title }}
                    </h1>
                    <p class="mb-6 text-lg text-gray-500 md:text-2xl">
                        {{ description }}
                    </p>
                </div>
                <div class="w-full px-4 md:w-1/2">
                    <div class="relative mx-auto max-w-max md:mr-0">
                        <img
                            class="absolute -left-8 -top-8 z-10 w-28 text-yellow-400 md:w-auto"
                            src="/src/assets/images/elements/circle3-green.svg"
                            alt="" />
                        <img
                            class="absolute -right-7 -bottom-8 z-10 w-28 text-blue-500 md:w-auto"
                            src="/src/assets/images/elements/dots3-yellow.svg"
                            alt="" />
                        <!-- <img class="rounded-3xl" :src="whatWeDo" alt=""> -->
                        <img
                            class="rounded-3xl"
                            src="/src/assets/images/pitch/what-we-do.jpg"
                            alt="design"
                            width="640"
                            height="373" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import pattern from '~/assets/images/elements/pattern-white.svg'
defineProps({ title: String, description: String })
</script>
