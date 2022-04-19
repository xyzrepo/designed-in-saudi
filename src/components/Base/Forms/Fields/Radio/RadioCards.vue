<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <RadioGroup v-model="selectedOption" class="my-6">
        <RadioGroupLabel class="pt-8 text-2xl font-medium text-gray-900">{{ label }}</RadioGroupLabel>

        <div v-if="selectedOption" class="mt-1 pt-4 flex text-xl text-gray-900 sm:mt-0 sm:col-span-2">
            <slot name="displayField">
                <span class="flex-grow">{{ selectedOption?.description }}</span>
                <span class="ml-4 flex-shrink-0">
                    <!-- <button type="button" class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button> -->
                    <SecondaryButton @click="selectedOption = null">
                        <RefreshIcon class="w-5 h-5" />
                        Update
                    </SecondaryButton>
                </span>
            </slot>
        </div>
        <!-- v-show="selectedOption === null" -->
        <div v-show="selectedOption === null"
            :class="`mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-${grid ? '2' : '1'} lg:grid-cols-${grid ? '3' : '1'} sm:gap-x-4`">
            <RadioGroupOption v-for="(option, i) in options" :key="option.id" v-slot="{ checked, active }" as="span"
                :value="option" :tabindex="i" @click="$emit('update:modelValue', selectedOption);">
                <div
                    :class="[focus === i ? 'bg-red-700' : '', checked ? 'border-transparent' : 'border-gray-300', active ? 'border-indigo-500 ring-2 ring-indigo-500' : '', 'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none']">
                    <div class="flex-1 flex">
                        <div class="flex flex-col">
                            <RadioGroupLabel v-if="option?.name" as="span"
                                class="block text-xl font-semibold text-gray-900">
                                {{ option.name }}
                            </RadioGroupLabel>
                            <RadioGroupDescription v-if="option?.description" as="span"
                                class="mt-1 flex items-center text-sm text-gray-500">
                                {{ option.description }}
                            </RadioGroupDescription>
                            <RadioGroupDescription v-if="option?.meta" as="span"
                                class="mt-6 text-sm font-medium text-gray-900">
                                {{ option.meta }}
                            </RadioGroupDescription>
                        </div>
                    </div>
                    <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600']"
                        aria-hidden="true" />
                    <div :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']"
                        aria-hidden="true" />
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<script setup>
// import { ref } from 'vue'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { RefreshIcon } from '@heroicons/vue/outline'
import { CheckCircleIcon } from '@heroicons/vue/solid';
defineProps({
    grid: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        // default: 'Select an option'
    },
    options: {
        type: Array,
        default: () => [
            { id: 1, name: 'Yes', description: 'YASSSSS!!!', meta: 'This means you like it' },
            { id: 2, name: 'No', description: 'Nope. Nyet. Nada.', meta: 'This means you hate it' },
        ]
    }
})
const selectedOption = ref(null)
// const emit = defineEmits(['update:modelValue'])
// const update = emit('update:modelValue')
const focus = ref(null)
const focusClick = (event, index) => {
    if (event.keyCode === 'ArrowUp') {
        if (focus.value === null) {
            focus.value = 0;
        } else if (focus.value > 0) {
            focus.value--;
        }
    }
    else if (event.keyCode === 'ArrowDown') {
        if (focus.value === null) {
            focus.value = 0;
        } else if (focus.value < index + 1) {
            //   } else {
            focus.value++;
        }
    }
    // else focus.value = index+1
    console.log(focus.value, index)
    // return false;
}
defineEmits(['update:modelValue'])
</script>