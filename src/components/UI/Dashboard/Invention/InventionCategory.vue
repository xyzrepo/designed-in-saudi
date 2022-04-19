<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <RadioGroup
        v-model="selectedCategory"
        @click="emit('update', selectedCategory)">
        <!-- <RadioGroupLabel class="text-2xl font-medium text-gray-900">Select a category</RadioGroupLabel> -->

        <div
            class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3">
            <RadioGroupOption
                v-for="category in categories"
                :key="category.id"
                v-slot="{ checked, active }"
                as="template"
                :value="category">
                <div
                    :class="[
                        checked ? 'border-transparent' : 'border-gray-300',
                        active
                            ? 'border-indigo-500 ring-2 ring-indigo-500'
                            : '',
                        'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                    ]">
                    <div class="flex flex-1">
                        <div class="flex flex-col">
                            <RadioGroupLabel
                                as="span"
                                class="block text-xl font-semibold text-gray-900">
                                {{ category.name }}
                            </RadioGroupLabel>
                            <RadioGroupDescription
                                as="span"
                                class="mt-1 flex items-center text-sm text-gray-500">
                                {{ category.description }}
                            </RadioGroupDescription>
                            <RadioGroupDescription
                                as="span"
                                class="mt-6 text-sm font-medium text-gray-900">
                                {{ category.meta }}
                            </RadioGroupDescription>
                        </div>
                    </div>
                    <CheckCircleIcon
                        :class="[
                            !checked ? 'invisible' : '',
                            'h-5 w-5 text-indigo-600'
                        ]"
                        aria-hidden="true" />
                    <div
                        :class="[
                            active ? 'border' : 'border-2',
                            checked
                                ? 'border-indigo-500'
                                : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-lg'
                        ]"
                        aria-hidden="true" />
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<script setup>
// import { ref } from 'vue'
import { RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/solid'
import { invention } from '@content'
const emit = defineEmits(['update'])
defineProps({
    categories: {
        type: Array,
        default: () => [
            {
                id: 1,
                title: 'Fashion',
                description: 'Apparel and Accessories',
                meta: '621 users'
            },
            {
                id: 2,
                title: 'Gadgets',
                description: 'Last message sent 2 weeks ago',
                meta: '1200 users'
            },
            {
                id: 3,
                title: 'Furniture',
                description: 'Last message sent 4 days ago',
                meta: '2740 users'
            },
            {
                id: 4,
                title: 'Kitchen and Home',
                description: 'Last message sent an hour ago',
                meta: '621 users'
            },
            {
                id: 5,
                title: 'Existing Customers',
                description: 'Last message sent 2 weeks ago',
                meta: '1200 users'
            },
            {
                id: 6,
                title: 'Trial Users',
                description: 'Last message sent 4 days ago',
                meta: '2740 users'
            },
            {
                id: 7,
                title: 'Newsletter',
                description: 'Last message sent an hour ago',
                meta: '621 users'
            },
            {
                id: 8,
                title: 'Existing Customers',
                description: 'Last message sent 2 weeks ago',
                meta: '1200 users'
            },
            {
                id: 9,
                title: 'Trial Users',
                description: 'Last message sent 4 days ago',
                meta: '2740 users'
            }
        ]
    }
})
const selectedCategory = ref(null)
</script>
