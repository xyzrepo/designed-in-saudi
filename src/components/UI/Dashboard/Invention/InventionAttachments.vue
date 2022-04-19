<template>
    <div>
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select
                id="tabs"
                name="tabs"
                class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base capitalize focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                @change="selectTab">
                <option
                    v-for="tab in tabs"
                    :key="tab.name"
                    :selected="tab.name">
                    {{ tab.name }}
                </option>
            </select>
        </div>
        <div class="hidden sm:block">
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <button
                        v-for="tab in tabs"
                        :key="tab.name"
                        :class="[
                            currentTab === tab.name
                                ? 'border-primary-500 text-primary-600'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium capitalize'
                        ]"
                        :aria-current="
                            currentTab === tab.name ? 'page' : undefined
                        "
                        @click="currentTab = tab.name">
                        {{ tab.name }}
                    </button>
                </nav>
            </div>
        </div>

        <ul
            role="list"
            class="divide-y divide-gray-200 rounded-md border border-gray-200">
            <li
                v-for="(attachment, i) in data[currentTab]"
                :key="i"
                class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                <div class="flex w-0 flex-1 items-center">
                    <!-- <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> -->
                    <span class="ml-2 w-0 flex-1 truncate">
                        {{ attachment.name }}
                    </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                    <a
                        :href="attachment.href || '#download'"
                        class="font-medium text-primary-600 hover:text-blue-500">
                        View
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { formData as data } from '@composables/useInvention'
const tabs = [
    { name: 'inspirations' },
    { name: 'sketches' },
    { name: 'renders' },
    { name: 'prototypes' },
    { name: 'videos' }
]
const currentTab = ref(tabs[0].name)
const selectTab = event => {
    // console.log(event.target.value);
    currentTab.value = event.target.value
}
</script>
