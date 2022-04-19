<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="relative overflow-hidden bg-gray-50">
        <div class="relative pt-6 pb-16 sm:pb-24">
            <main class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
                <div class="text-center">
                    <h1
                        class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        <span
                            class="block bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent xl:inline">
                            {{ title }}
                        </span>
                    </h1>
                    <p
                        class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                        {{ description }}
                    </p>
                    <CTA1 />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' }
]
defineProps({
    title: { type: String, default: 'Data to enrich your online business' },
    description: {
        type: String,
        default:
            'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
    }
})
</script>
