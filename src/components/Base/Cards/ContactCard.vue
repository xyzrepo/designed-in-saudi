<template>
    <li
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div class="flex flex-1 flex-col p-8">
            <img
                class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                :src="item.imageUrl"
                alt="" />
            <h3 class="mt-6 text-sm font-medium text-gray-900">
                {{ item.name }}
            </h3>
            <dl class="mt-1 flex flex-grow flex-col justify-between">
                <dt class="sr-only">Title</dt>
                <dd class="text-sm text-gray-500">{{ item.title }}</dd>
                <dt class="sr-only">Role</dt>
                <dd class="mt-3">
                    <span
                        class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">{{ item.role }}</span>
                </dd>
            </dl>
        </div>
        <div>
            <div class="-mt-px flex divide-x divide-gray-200">
                <div class="flex w-0 flex-1">
                    <a
                        :href="`mailto:${item.email}`"
                        class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                        <MailIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true" />
                        <span class="ml-3">Email</span>
                    </a>
                </div>
                <div class="-ml-px flex w-0 flex-1">
                    <a
                        :href="`tel:${item.telephone}`"
                        class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                        <PhoneIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true" />
                        <span class="ml-3">Call</span>
                    </a>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup>
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'
defineProps({ item: Object })
</script>
