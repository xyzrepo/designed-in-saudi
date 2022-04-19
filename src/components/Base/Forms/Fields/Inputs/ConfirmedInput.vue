<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div v-show="confirmed" class="mt-5">
        <h3 class="text-2xl font-medium leading-6 text-gray-900">
            {{ label || 'Label' }}
        </h3>
        <div
            class="mt-1 flex pt-4 text-2xl text-gray-900 sm:col-span-2 sm:mt-0">
            <span class="flex-grow">{{ modelValue }}</span>

            <div class="ml-4 flex-shrink-0">
                <SecondaryButton
                    @click="confirmed = false"
                    @keydown.enter="confirmed = false">
                    <RefreshIcon class="h-5 w-5" aria-hidden="true" />
                    <span>{{ 'Update' }}</span>
                </SecondaryButton>
            </div>
        </div>
    </div>
    <BareModal :open="!confirmed">
        <div class="mt-5">
            <h3 class="text-2xl font-medium leading-6 text-gray-900">
                {{ label || 'Label' }}
            </h3>
            <div
                class="mt-1 flex pt-4 text-2xl text-gray-900 sm:col-span-2 sm:mt-0">
                <div
                    class="relative flex flex-grow items-stretch focus-within:z-10">
                    <div
                        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <component
                            :is="icon || PencilAltIcon"
                            class="h-5 w-5"
                            aria-hidden="true" />
                    </div>
                    <input
                        :value="modelValue"
                        type="text"
                        class="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
                        :placeholder="label"
                        aria-describedby="textfield"
                        required="true"
                        aria-required="true"
                        :class="{
                            'border-none bg-gray-100 text-gray-500': confirmed
                        }"
                        @change="updateValue"
                        @keyup.enter="confirmed = true" />
                </div>

                <!-- <div class="ml-4 flex-shrink-0 flex items-center"> -->

                <!-- <SecondaryButton @click="confirmed = true;">
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        <span>{{ 'Confirm' }}</span>
                    </SecondaryButton> -->
                <!-- </div> -->
            </div>
            <div class="mt-5 sm:mt-6">
                <PrimaryButton @click="confirmed = true">
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    <span>{{ 'Confirm' }}</span>
                </PrimaryButton>
                <!-- <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" @click="confirmed = true">Confirm</button> -->
            </div>
        </div>
    </BareModal>
</template>

<script setup>
import { RefreshIcon, CheckIcon, PencilAltIcon } from '@heroicons/vue/outline'
const confirmed = ref(false)
const emit = defineEmits(['update:modelValue'])
const props = defineProps({ icon: String, label: String, modelValue: String })
const updateValue = event => {
    // props.modelValue = event.target.value
    emit('update:modelValue', event.target.value)
}
</script>
