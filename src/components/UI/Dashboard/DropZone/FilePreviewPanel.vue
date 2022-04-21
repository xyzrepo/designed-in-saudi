<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="close">
            <div class="absolute inset-0 overflow-hidden">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100"
                    leave-to="opacity-0">
                    <DialogOverlay class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enter-from="translate-x-full" enter-to="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
                        leave-to="translate-x-full">
                        <div class="pointer-events-auto relative max-w-4xl">
                            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                                enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                    <button type="button"
                                        class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                        @click="$emit('update:open', false)">
                                        <span class="sr-only">Close panel</span>
                                        <XIcon class="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div class="h-full overflow-y-auto bg-white p-8">
                                <div class="space-y-6 pb-16">
                                    <div>
                                        <div class="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                                            <img :src="item.url" :alt="item.file.name" class="object-cover" />
                                        </div>
                                        <div class="mt-4 flex items-start justify-between">
                                            <div>
                                                <h2 class="text-lg font-medium text-gray-900">
                                                    <span class="sr-only">Details for </span>{{ item.file.name }}
                                                </h2>
                                                <p class="text-sm font-medium text-gray-500"> {{
                                                    `${(item.file.size /
                                                        1024 / 1024).toFixed(2)} MB`
                                                }}</p>
                                            </div>
                                            <button type="button"
                                                class="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                                <HeartIcon class="h-6 w-6" aria-hidden="true" />
                                                <span class="sr-only">Favorite</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="font-medium text-gray-900">Information</h3>
                                        <dl class="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                                            <div class="flex flex-row justify-between py-3 text-sm font-medium">
                                                <dt class="text-gray-500">File Name</dt>
                                                <dd class="text-gray-900">{{ item.file.name }}</dd>
                                            </div>
                                            <div class="flex justify-between py-3 text-sm font-medium">
                                                <dt class="text-gray-500">File Type</dt>
                                                <dd class="text-gray-900">{{ item.file.type }}</dd>
                                            </div>
                                            <div class="flex justify-between py-3 text-sm font-medium">
                                                <dt class="text-gray-500">Last Modified</dt>
                                                <dd class="text-gray-900">
                                                    {{ dayjs(item.file.lastModifiedDate).fromNow() }}
                                                </dd>
                                            </div>
                                            <div class="flex justify-between py-3 text-sm font-medium">
                                                <dt class="text-gray-500">Dimensions</dt>
                                                <dd class="text-gray-900">4032 x 3024</dd>
                                            </div>
                                            <div class="flex justify-between py-3 text-sm font-medium">
                                                <dt class="text-gray-500">Resolution</dt>
                                                <dd class="text-gray-900">72 x 72</dd>
                                            </div>
                                            <div v-for="key in Object.keys(item.meta)"
                                                class="flex justify-between py-3 text-sm font-medium">
                                                <dt class="text-gray-500">{{ key }}</dt>
                                                <dd class="text-gray-900">{{
                                                    typeof item.meta[key] === 'object' ?
                                                        item.meta[key].name : item.meta[key]
                                                }}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div>
                                        <h3 class="font-medium text-gray-900">Description</h3>
                                        <div class="mt-2 flex items-center justify-between">
                                            <p class="text-sm italic text-gray-500">
                                                {{ JSON.stringify(item.meta, null, '\n\t') }}
                                            </p>
                                            <button type="button"
                                                class="-mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                                <PencilIcon class="h-5 w-5" aria-hidden="true" />
                                                <span class="sr-only">Add description</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="flex">
                                        <PrimaryButton :href="item.url" target="_blank"
                                            class="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            Download
                                        </PrimaryButton>
                                        <button type="button" @click="removeAndClose"
                                            class="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { HeartIcon, XIcon } from "@heroicons/vue/outline";
import { PencilIcon, PlusSmIcon } from "@heroicons/vue/solid";

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const props = defineProps({ open: { type: Boolean, default: false }, item: { type: Object } })
const emit = defineEmits(['update:open', 'remove', 'close'])
const removeAndClose = e => {
    emit('update:open', false)
    emit('remove', props.item)
}
const close = () => emit('update:open', false)
</script>
