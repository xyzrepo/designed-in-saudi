<template>
    <section aria-labelledby="applicant-information-title" class="mt-4 select-auto z-10">
        <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
                <h2 id="applicant-information-title" class="text-xl leading-6 font-medium text-gray-900">
                    Invention Information
                </h2>
                <p class="mt-1 max-w-2xl text-md text-gray-500">
                    Application details
                </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                        <dt class="text-md font-medium text-gray-500">Project Name</dt>
                        <dd v-if="data.name" class="mt-1 text-md text-gray-900">{{ data.name }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-md font-medium text-gray-500">Category</dt>
                        <dd v-if="data.category" class="mt-1 text-md text-gray-900">{{ data.category?.name }} :: {{
                            data.category.description
                        }}</dd>
                        <dd v-if="data.subcategory" class="mt-1 text-md text-gray-900">{{ data.subcategory.name }} :: {{
                            data.subcategory.description
                        }}</dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-md font-medium text-gray-500">Elevator Pitch</dt>
                        <dd v-if="data.caption" class="mt-1 text-md text-gray-900">{{ data.caption }}</dd>
                    </div>
                    <div  class="sm:col-span-2">
                        <dt class="text-md font-medium text-gray-500">Description</dt>
                        <dd v-if="data.description" class="mt-1 text-md text-gray-900">{{ data.description }}</dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-md font-medium text-gray-500">Patented</dt>
                        <dd v-if="data.patent" class="mt-1 text-md text-gray-900">
                            {{
                                data.patent?.id === 1 ? 'Yes, Patent Number ' + data.patent_number
                                    : data.patent?.id === 2 ? 'Pending'
                                        : 'No'
                            }}
                        </dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-md font-medium text-gray-500">Features</dt>
                        <dd v-if="data.features" class="mt-1 text-md text-gray-900">
                            <ul role="list" class="divide-y divide-gray-200 border border-gray-200 rounded-md">
                                <li v-for="(feature, i) in data.features" :key="i"
                                    class="pl-3 pr-4 py-3 flex items-start justify-between flex-col text-sm">
                                    <div class="flex justify-between space-x-3 flex-row">
                                        <div class="min-w-0 flex-1">
                                            <div class="block focus:outline-none">
                                                <span class="absolute inset-0" aria-hidden="true" />
                                                <p class="text-md font-medium text-gray-900 flex flex-grow">
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
                    <!-- <div class="sm:col-span-2">
                        <dt class="text-sm font-medium text-gray-500">Attachments</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                            <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                                <li v-for="attachment in attachments" :key="attachment.name"
                                    class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div class="w-0 flex-1 flex items-center">
                                        <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span class="ml-2 flex-1 w-0 truncate">
                                            {{ attachment.name }}
                                        </span>
                                    </div>
                                    <div class="ml-4 flex-shrink-0">
                                        <a :href="attachment.href"
                                            class="font-medium text-blue-600 hover:text-blue-500"> Download </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div> -->
                </dl>
            </div>
        </div>
    </section>
</template>

<script setup>
// import { formData as data } from '@composables/useInvention'
defineProps({ data: Object })
</script>
