<template>
    <section aria-labelledby="applicant-information-title" class="mt-4">
        <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
                <h2
                    id="applicant-information-title"
                    class="text-xl font-medium leading-6 text-gray-900">
                    Invention Information
                </h2>
                <p class="text-md mt-1 max-w-2xl text-gray-500">
                    Application details
                </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                        <dt class="text-md font-medium text-gray-500">
                            Project Name
                        </dt>
                        <dd v-if="data.name" class="text-md mt-1 text-gray-900">
                            {{ data.name }}
                        </dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-md font-medium text-gray-500">
                            Category
                        </dt>
                        <dd
                            v-if="data.category"
                            class="text-md mt-1 text-gray-900">
                            {{ data.category?.name }} ::
                            {{ data.category.description }}
                        </dd>
                        <dd
                            v-if="data.subcategory"
                            class="text-md mt-1 text-gray-900">
                            {{ data.subcategory.name }} ::
                            {{ data.subcategory.description }}
                        </dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-md font-medium text-gray-500">
                            Elevator Pitch
                        </dt>
                        <dd
                            v-if="data.caption"
                            class="text-md mt-1 text-gray-900">
                            {{ data.caption }}
                        </dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-md font-medium text-gray-500">
                            Description
                        </dt>
                        <dd
                            v-if="data.description"
                            class="text-md mt-1 text-gray-900">
                            {{ data.description }}
                        </dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-md font-medium text-gray-500">
                            Patented
                        </dt>
                        <dd
                            v-if="data.patent"
                            class="text-md mt-1 text-gray-900">
                            {{
                                data.patent?.id === 1
                                    ? 'Yes, Patent Number ' + data.patent_number
                                    : data.patent?.id === 2
                                    ? 'Pending'
                                    : 'No'
                            }}
                        </dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-md font-medium text-gray-500">
                            Disclosure Status
                        </dt>
                        <dd
                            v-if="data.disclosed"
                            class="text-md mt-1 text-gray-900">
                            {{ data.disclosed.description }}
                        </dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-md font-medium text-gray-500">
                            Features
                        </dt>
                        <dd
                            v-if="data.features"
                            class="text-md mt-1 text-gray-900">
                            <ul
                                role="list"
                                class="divide-y divide-gray-200 rounded-md border border-gray-200">
                                <li
                                    v-for="(feature, i) in data.features"
                                    :key="i"
                                    class="flex flex-col items-start justify-between py-3 pl-3 pr-4 text-sm">
                                    <div
                                        class="flex flex-row justify-between space-x-3">
                                        <div class="min-w-0 flex-1">
                                            <div
                                                class="block focus:outline-none">
                                                <span
                                                    class="absolute inset-0"
                                                    aria-hidden="true" />
                                                <p
                                                    class="text-md flex flex-grow font-medium text-gray-900">
                                                    {{ feature.name }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-1">
                                        <p class="text-sm text-gray-600">
                                            {{ feature.value }}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>

                    <div class="sm:col-span-2">
                        <InventionAttachments />
                    </div>
                </dl>
            </div>
        </div>
    </section>
</template>

<script setup>
import InventionAttachments from './InventionAttachments.vue'
// import { formData as data } from '@composables/useInvention'
defineProps({ data: Object })
</script>
