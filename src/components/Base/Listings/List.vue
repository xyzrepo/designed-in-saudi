<template>
    <div class="overflow-hidden bg-transparent sm:rounded-md">
        <ul role="list" class="mb-2 space-y-2 rounded-md">
            <li
                v-for="(item, index) in items"
                :key="index"
                :class="[
                    {
                        'border-primary-600 ring-2 ring-primary-600':
                            selected === index
                    },
                    'relative m-2 rounded-md bg-white shadow hover:bg-gray-50 focus:outline-none active:bg-gray-100'
                ]"
                @click="selected = index">
                <component :is="component" :item="item" />
            </li>
        </ul>
        {{ items.filter((item, index) => index === selected) }}
    </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/outline'
const selected = ref(0)

defineProps({ items: { type: Array }, component: { type: Object } })
</script>
