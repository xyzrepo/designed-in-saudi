<template>
    <a href="#" class="block">
        <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
                <p class="truncate text-sm font-medium text-indigo-600">
                    {{ item.title }}
                </p>
                <div class="ml-2 flex flex-shrink-0">
                    <p
                        class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {{ item.type }}
                    </p>
                </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                    <p class="flex items-center text-sm text-gray-500">
                        <UsersIcon
                            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true" />
                        {{ item.department }}
                    </p>
                    <p
                        class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <LocationMarkerIcon
                            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true" />
                        {{ item.location }}
                    </p>
                </div>
                <div
                    class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon
                        class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true" />
                    <p>
                        Closing on {{ ' ' }}
                        <time :datetime="item.closeDate">{{
                            item.closeDateFull
                        }}</time>
                    </p>
                </div>
            </div>
        </div>
    </a>
</template>

<script setup>
import { CalendarIcon,
    LocationMarkerIcon,
    UsersIcon } from '@heroicons/vue/solid'
defineProps({ item: Object })
</script>
