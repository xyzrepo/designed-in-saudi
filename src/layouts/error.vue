<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
    <div class="flex min-h-full flex-col">
        <Nav />

        <main
            class="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
            <div class="my-auto flex-shrink-0 py-16 sm:py-32">
                <p
                    class="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                    404 error
                </p>
                <h1
                    class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                    Page not found
                </h1>
                <p class="mt-2 text-base text-gray-500">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div class="mt-6">
                    <a
                        href="/"
                        class="text-base font-medium text-indigo-600 hover:text-indigo-500">Go back home<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script setup>
// import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
// import { MenuIcon, XIcon } from '@heroicons/vue/outline'

// export default {
//   components: {
//     Popover,
//     PopoverButton,
//     PopoverPanel,
//     MenuIcon,
//     XIcon,
//     Navigation
// },
//   setup() {
//     return {
//       navigation,
//       footer,
//     }
//   },
// }
</script>
