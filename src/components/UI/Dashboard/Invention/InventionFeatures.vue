<template>
    <!-- <div class="isolate -space-y-px rounded-md shadow-sm"> -->

    <div
        class="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <div class="block text-2xl font-medium text-gray-700">Features</div>
        <!-- <h3 class="text-lg leading-6 font-medium text-gray-900">Job Postings</h3> -->
        <div class="mt-3 sm:mt-0 sm:ml-4">
            <SecondaryButton
                type="button"
                class="text-md inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click="open = true">
                <PlusIcon class="mx-1 h-5 w-5" />
                Add a feature
            </SecondaryButton>
            <!-- <PrimaryButton @click="features.push({ name: 'New Feature', value: 'New Value' })" class="">
          <PlusIcon class="h-5 w-5"/> Add a feature
      </PrimaryButton> -->
        </div>
        <BareModal :open="open">
            <!-- <ConfirmedInput v-model="newEntry" @update:modelValue="$emit('close')"/> -->
            <input
                v-model="newEntry.name"
                type="text"
                class="block w-full rounded-md border-gray-300"
                placeholder="Feature Name" />
            <div class="mt-1">
                <textarea
                    id="comment"
                    v-model="newEntry.value"
                    rows="4"
                    name="description"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Feature Description" />
            </div>
            <!-- <input type="text" name="name" >
        <input type="text" name="feature"> -->
            <!-- <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"> -->
            <PrimaryButton
                type="button"
                class="mt-5 inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                @click="
                    () => {
                        let { name, value } = newEntry
                        features.push({ name, value })
                        emit('update:modelValue', features)
                        newEntry.name = null
                        newEntry.value = null
                        open = false
                    }
                ">Confirm</PrimaryButton>
            <!-- </div> -->
        </BareModal>
    </div>

    <ul role="list" class="divide-y divide-gray-200">
        <li
            v-for="(feature, i) in features"
            :key="i"
            class="relative rounded-sm bg-white py-5 px-4 shadow-md focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50 focus:outline-none">
            <div class="flex justify-between space-x-3">
                <div class="min-w-0 flex-1">
                    <div class="block focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true" />
                        <p
                            class="text-md flex flex-grow font-medium text-gray-900">
                            {{ feature.name }}
                        </p>
                    </div>
                </div>
                <button
                    class="text-md z-10 flex w-10 flex-shrink-0 items-center justify-center whitespace-nowrap rounded-md hover:bg-indigo-100"
                    @click="features.splice(i, 1)">
                    <XIcon
                        class="h-8 w-8 stroke-1 text-gray-700 hover:text-inherit" />
                </button>
            </div>
            <div class="mt-1">
                <p class="text-sm text-gray-600">
                    {{ feature.value }}
                </p>
            </div>
        </li>
    </ul>
    <!-- <div class="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
        v-for="(item, index) in features" :key="index">

      <label for="name" class="block text-xs font-medium text-gray-900">{{item.name}}</label>
      <input v-model="item.value" type="text" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" :placeholder="item.name" />
        
    </div> -->
    <!-- </div> -->
</template>
<script setup>
import { formData } from '@composables/useInvention'
import { PlusIcon, XIcon, XCircleIcon } from '@heroicons/vue/outline'
const newEntry = ref({})
const open = ref(false)
const emit = defineEmits(['update:modelValue'])
defineProps({ modelValue: { type: Array, default: () => []} })
const features = ref([
    { name: 'Feature X', value: 'XXX' },
    { name: 'Feature Y', value: 'YYY' },
    { name: 'Feature Z', value: 'ZZZ' }
])
emit('update:modelValue', features)
</script>
