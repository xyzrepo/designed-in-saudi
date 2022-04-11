<template>
    <section class="bg-gray-50">
        <nav class="flex justify-between p-6 px-4">
            <a href="/">
                <img class="h-20" src="/logo.png" alt="">
            </a>
            <div class="hidden md:flex items-center">
                <ul class="flex mr-12">
                    <PopoverGroup as="nav" class="hidden md:flex space-x-10">
                        <!-- <Popover class="relative" v-slot="{ open }">
                            <PopoverButton class="gradient text-4xl font-extrabold hover:text-primary-900 underline-offset-8 decoration-8 hover:underline">
                                Solutions
                            </PopoverButton>
                            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                                <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                            <router-link tag="a" v-for="item in solutions" :key="item.name" :to="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                                                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                                                </div>
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900">
                                                        {{ item.name }}
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        {{ item.description }}
                                                    </p>
                                                </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </transition>
                        </Popover> -->
                        <router-link v-for="(item, index) in navigation" :key="index" tag="a" class="gradient md:text-3xl lg:text-4xl font-extrabold hover:text-primary-900 underline-offset-8 decoration-8 hover:underline active:underline" :to="item.path">{{item.name}}</router-link>
                    </PopoverGroup>
    
                </ul>
            </div>
            <button @click="open = true" class="text-black hover:text-primary-700 navbar-burger self-center md:hidden">
            <!-- <transition enter-active-class="transition ease-out duration-900" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1"> -->
                <svg width="95" height="95" xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                    <path stroke-linecap="square" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            <!-- </transition> -->
            </button>
        </nav>

        <div :class="`navbar-menu ${open ? '' : 'hidden'} fixed top-0 right-0 z-50 w-full h-full bg-gray-900 bg-opacity-50`">
            <div class="fixed top-0 right-0 bottom-0 w-full max-w-full bg-white">
                                    
                <nav class="relative p-6 h-full overflow-y-auto">
                    <div class="flex flex-col justify-between h-full">
                        <div>
                            <a class="inline-block mb-6" href="/">
                                <img class="h-28" src="/logo.png" alt="">
                            </a>
                            <ul class="mb-6 text-center">
                                <!-- gradient md:text-3xl lg:text-4xl font-extrabold hover:text-primary-900 underline-offset-8 decoration-8 hover:underline active:underline -->
                                <li><router-link v-for="(item, index) in navigation" :key="index" class="title gradient block py-3 px-4 hover:text-primary-700 font-extrabold hover:bg-gray-50 underline-offset-8 decoration-8 hover:underline active:underline" :to="item.path">{{item.name}}</router-link></li>
                            </ul>
                        </div>
                        <!-- <a class="inline-block py-2 px-4 w-full text-sm leading-5 text-violet-50 bg-gray-500 hover:bg-gray-600 font-medium text-center focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-md" href="#">Contact Us</a> -->
                    </div>
                </nav>
                <a @click="open = false" class="text-black hover:text-primary-700 navbar-close absolute top-5 p-0 right-4" href="#">
                
                    <svg width="95" height="95" xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                        <path stroke-linecap="square" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
        <!-- </transition> -->
                    <!-- <svg width="75" height="75" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="currentColor"></path>
                    </svg> -->
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, InboxIcon, AnnotationIcon, ChatAlt2Icon, QuestionMarkCircleIcon } from "@heroicons/vue/solid";
import content from '~/components/composables/useContent';
const navigation = content.navigation
const open = ref(false)
defineProps({
    navigation: Array,
    default: content.navigation
})
const isActive = ref('')
const solutions = [{
        name: "Inbox",
        description: "Get a better understanding of where your traffic is coming from.",
        href: "/1",
        icon: InboxIcon,
    },
    {
        name: "Messaging",
        description: "Speak directly to your customers in a more meaningful way.",
        href: "/2",
        icon: AnnotationIcon,
    },
    {
        name: "Live Chat",
        description: "Your customers' data will be safe and secure.",
        href: "/3",
        icon: ChatAlt2Icon,
    },
    {
        name: "Knowledge Base",
        description: "Connect with third-party tools that you're already using.",
        href: "/4",
        icon: QuestionMarkCircleIcon,
    },
]
</script>

<style>
.hamburger {
        color: transparent;
        background-clip: text;
        --tw-gradient-from: #4c1d95;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(76 29 149 / 0));
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-bg-opacity: 1;
        background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
a.active {
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-thickness: 8px;
    text-decoration-offset: 8px;
    text-decoration-style: solid;
    background-clip: text;
    --tw-text-opacity: 1;
    color: rgb(76 29 149 / var(--tw-text-opacity));
    --tw-gradient-from: #4c1d95;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(76 29 149 / 0));
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

a.active-exact {
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-thickness: 8px;
    text-decoration-offset: 8px;
    text-decoration-style: solid;
    background-clip: text;
    --tw-text-opacity: 1;
    color: rgb(76 29 149 / var(--tw-text-opacity));
    --tw-gradient-from: #4c1d95;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(76 29 149 / 0));
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
</style>
