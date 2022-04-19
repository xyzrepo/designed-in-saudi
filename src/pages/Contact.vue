<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          purple: colors.purple,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <main>
        <!-- Header -->
        <div class="bg-white py-24 sm:py-32">
            <div
                class="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
                <h1
                    class="text-center text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
                    Get in touch
                </h1>
                <p
                    class="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
                    Convallis feugiat et aliquet pellentesque dictum nisi,
                    velit. Egestas fermentum adipiscing risus quam ac
                    consectetur mattis turpis tristique.
                </p>
            </div>
        </div>

        <!-- Contact Section -->
        <div class="relative bg-white">
            <div class="lg:absolute lg:inset-0">
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        class="h-56 w-full object-cover lg:absolute lg:h-full"
                        src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        alt="" />
                </div>
            </div>
            <div
                class="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
                <div class="lg:pr-8">
                    <div class="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                        <h2
                            class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Let's work together
                        </h2>
                        <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                            We’d love to hear from you! Send us a message using
                            the form opposite, or email us. We’d love to hear
                            from you! Send us a message using the form opposite,
                            or email us.
                        </p>
                        <form
                            action="#"
                            method="POST"
                            class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label
                                    for="first-name"
                                    class="block text-sm font-medium text-gray-700">First name</label>
                                <div class="mt-1">
                                    <input
                                        id="first-name"
                                        type="text"
                                        name="first-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label
                                    for="last-name"
                                    class="block text-sm font-medium text-gray-700">Last name</label>
                                <div class="mt-1">
                                    <input
                                        id="last-name"
                                        type="text"
                                        name="last-name"
                                        autocomplete="family-name"
                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label
                                    for="email"
                                    class="block text-sm font-medium text-gray-700">Email</label>
                                <div class="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label
                                    for="company"
                                    class="block text-sm font-medium text-gray-700">Company</label>
                                <div class="mt-1">
                                    <input
                                        id="company"
                                        type="text"
                                        name="company"
                                        autocomplete="organization"
                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <div class="flex justify-between">
                                    <label
                                        for="phone"
                                        class="block text-sm font-medium text-gray-700">Phone</label>
                                    <span
                                        id="phone-description"
                                        class="text-sm text-gray-500">Optional</span>
                                </div>
                                <div class="mt-1">
                                    <input
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        autocomplete="tel"
                                        aria-describedby="phone-description"
                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <div class="flex justify-between">
                                    <label
                                        for="how-can-we-help"
                                        class="block text-sm font-medium text-gray-700">How can we help you?</label>
                                    <span
                                        id="how-can-we-help-description"
                                        class="text-sm text-gray-500">Max. 500 characters</span>
                                </div>
                                <div class="mt-1">
                                    <textarea
                                        id="how-can-we-help"
                                        name="how-can-we-help"
                                        aria-describedby="how-can-we-help-description"
                                        rows="4"
                                        class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                                </div>
                            </div>
                            <fieldset class="sm:col-span-2">
                                <legend
                                    class="block text-sm font-medium text-gray-700">
                                    Expected budget
                                </legend>
                                <div class="mt-4 grid grid-cols-1 gap-y-4">
                                    <div class="flex items-center">
                                        <input
                                            id="budget-under-25k"
                                            name="budget"
                                            value="under_25k"
                                            type="radio"
                                            class="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500" />
                                        <label
                                            for="budget-under-25k"
                                            class="ml-3">
                                            <span
                                                class="block text-sm text-gray-700">Less than $25K</span>
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="budget-25k-50k"
                                            name="budget"
                                            value="25k-50k"
                                            type="radio"
                                            class="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500" />
                                        <label
                                            for="budget-25k-50k"
                                            class="ml-3">
                                            <span
                                                class="block text-sm text-gray-700">$25K – $50K</span>
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="budget-50k-100k"
                                            name="budget"
                                            value="50k-100k"
                                            type="radio"
                                            class="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500" />
                                        <label
                                            for="budget-50k-100k"
                                            class="ml-3">
                                            <span
                                                class="block text-sm text-gray-700">$50K – $100K</span>
                                        </label>
                                    </div>
                                    <div class="flex items-center">
                                        <input
                                            id="budget-over-100k"
                                            name="budget"
                                            value="over_100k"
                                            type="radio"
                                            class="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500" />
                                        <label
                                            for="budget-over-100k"
                                            class="ml-3">
                                            <span
                                                class="block text-sm text-gray-700">$100K+</span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div class="sm:col-span-2">
                                <label
                                    for="how-did-you-hear-about-us"
                                    class="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                                <div class="mt-1">
                                    <input
                                        id="how-did-you-hear-about-us"
                                        type="text"
                                        name="how-did-you-hear-about-us"
                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
                                </div>
                            </div>
                            <div class="text-right sm:col-span-2">
                                <button
                                    type="submit"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <!-- <div class="bg-purple-400">
        <div class="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
          <h2 class="text-3xl font-extrabold sm:text-4xl">
            <span class="block text-white">Looking for a new career?</span>
            <span class="block text-purple-900">We’re hiring.</span>
          </h2>
          <a href="#" class="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-purple-600 hover:bg-purple-50 sm:w-auto">
            <span>See open positions</span>
            <ExternalLinkIcon class="ml-3 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          </a>
        </div>
      </div> -->
    </main>
</template>

<script setup>
// import { defineComponent, h } from 'vue'
// import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
// import { MenuIcon, XIcon } from '@heroicons/vue/outline'
// import { ExternalLinkIcon } from '@heroicons/vue/solid'

// export default {
//   components: {
//     Popover,
//     PopoverButton,
//     PopoverPanel,
//     ExternalLinkIcon,
//     MenuIcon,
//     XIcon,
//     Navigation,
//     Footer
// },
//   setup() {
//     return {
//       navigation,
//       footerNavigation,
//     }
//   },
// }
</script>
