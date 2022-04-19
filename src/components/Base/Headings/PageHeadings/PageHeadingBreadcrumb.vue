<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
            <li
                v-for="(item, index) in (fullPath || $route.fullPath)
                    .split('/')
                    .filter(p => p !== '')"
                :key="index">
                <div v-if="index === 0" class="flex items-center">
                    <a
                        :href="
                            dashboard.navigation.find(n =>
                                n.href.includes(item)
                            )?.href
                        "
                        class="text-sm font-medium capitalize text-gray-500 hover:text-gray-700">{{ item }}</a>
                </div>

                <div v-if="index !== 0" class="flex items-center">
                    <ChevronRightIcon
                        class="h-5 w-5 flex-shrink-0 text-gray-400 rtl:hidden"
                        aria-hidden="true" />
                    <ChevronLeftIcon
                        class="hidden h-5 w-5 flex-shrink-0 text-gray-400 rtl:flex"
                        aria-hidden="true" />
                    <a
                        :href="
                            dashboard.navigation.find(n =>
                                n.href.includes(item)
                            )?.href
                        "
                        class="ml-4 text-sm font-medium capitalize text-gray-500 hover:text-gray-700">{{ item }}</a>
                </div>
            </li>
        </ol>
    </nav>
</template>
<script setup>
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/outline'
import { dashboard } from '@content'
defineProps({ fullPath: String })
</script>
