<template>
    <section class="bg-gray-50">
        <BareModal :open="modalOpen" title="Sign in" @close="modalOpen = false">
            <Signin />
        </BareModal>
        <nav class="flex justify-between p-6 px-4">
            <a href="/">
                <img class="h-20" src="/logo.png" alt="logo" />
            </a>
            <div class="hidden items-center md:flex">
                <ul class="mr-12 flex">
                    <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
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
                        <router-link
                            v-for="(item, index) in navigation"
                            :key="index"
                            class="gradient font-extrabold decoration-8 underline-offset-8 hover:text-primary-900 hover:underline active:underline md:text-3xl lg:text-4xl"
                            :to="item.path">{{ item.name }}</router-link>
                        <!-- <a @click.prevent="modalOpen = true" class="gradient cursor-pointer md:text-3xl lg:text-4xl font-extrabold hover:text-primary-900 underline-offset-8 decoration-8 hover:underline active:underline">Sign in</a> -->
                    </PopoverGroup>
                </ul>
            </div>
            <button
                class="navbar-burger absolute top-0 right-0 h-24 w-24 self-center p-0 text-black hover:text-primary-700 md:hidden"
                @click="open = true">
                <svg
                    width="64"
                    height="64"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-16 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="3">
                    <path
                        stroke-linecap="square"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </nav>
        <div
            :class="`navbar-menu ${
                open ? '' : 'hidden'
            } fixed top-0 right-0 z-50 h-full w-full bg-gray-900 bg-opacity-50`">
            <div
                class="fixed top-0 right-0 bottom-0 w-full max-w-full bg-gray-50">
                <nav class="relative h-full overflow-y-auto p-6">
                    <div class="flex h-full flex-col justify-between">
                        <div>
                            <a class="mb-6 inline-block" href="/">
                                <img class="h-28" src="/logo.png" alt="logo" />
                            </a>
                            <ul class="mb-6 text-center">
                                <!-- gradient md:text-3xl lg:text-4xl font-extrabold hover:text-primary-900 underline-offset-8 decoration-8 hover:underline active:underline -->
                                <li>
                                    <router-link
                                        v-for="(item, index) in navigation"
                                        :key="index"
                                        class="title gradient block py-3 px-4 font-extrabold decoration-8 underline-offset-8 hover:bg-gray-50 hover:text-primary-700 hover:underline active:underline"
                                        :to="item.path"
                                        @click="open = false">{{ item.name }}</router-link>
                                </li>
                            </ul>
                        </div>
                        <!-- <a class="inline-block py-2 px-4 w-full text-sm leading-5 text-violet-50 bg-gray-500 hover:bg-gray-600 font-medium text-center focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-md" href="#">Contact Us</a> -->
                    </div>
                </nav>

                <button
                    class="navbar-close absolute top-4 right-8 p-0 text-black hover:text-primary-700"
                    @click="open = false">
                    <svg
                        width="64"
                        height="64"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-16 w-16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="3">
                        <path
                            stroke-linecap="square"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon,
    InboxIcon,
    AnnotationIcon,
    ChatAlt2Icon,
    QuestionMarkCircleIcon } from '@heroicons/vue/solid'
import content from '@content'
const navigation = content.navigation
const open = ref(false)
const modalOpen = ref(false)
defineProps({ navigation: Array, default: content.navigation })
const solutions = [
    {
        name: 'Inbox',
        description:
            'Get a better understanding of where your traffic is coming from.',
        href: '/1',
        icon: InboxIcon
    },
    {
        name: 'Messaging',
        description:
            'Speak directly to your customers in a more meaningful way.',
        href: '/2',
        icon: AnnotationIcon
    },
    {
        name: 'Live Chat',
        description: "Your customers' data will be safe and secure.",
        href: '/3',
        icon: ChatAlt2Icon
    },
    {
        name: 'Knowledge Base',
        description:
            "Connect with third-party tools that you're already using.",
        href: '/4',
        icon: QuestionMarkCircleIcon
    }
]
</script>

<style>
.hamburger {
    color: transparent;
    background-clip: text;
    --tw-gradient-from: #4c1d95;
    --tw-gradient-stops: var(--tw-gradient-from),
        var(--tw-gradient-to, rgb(76 29 149 / 0));
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

a.active,
button.active {
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-thickness: 8px;
    text-decoration-offset: 8px;
    text-decoration-style: solid;
    background-clip: text;
    --tw-text-opacity: 1;
    color: rgb(76 29 149 / var(--tw-text-opacity));
    --tw-gradient-from: #4c1d95;
    --tw-gradient-stops: var(--tw-gradient-from),
        var(--tw-gradient-to, rgb(76 29 149 / 0));
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
    --tw-gradient-stops: var(--tw-gradient-from),
        var(--tw-gradient-to, rgb(76 29 149 / 0));
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
</style>
