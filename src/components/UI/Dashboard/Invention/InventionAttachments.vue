<template>
    <div>
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select id="tabs" name="tabs" class="capitalize block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                @change="selectTab">
                <option v-for="tab in tabs" :key="tab.name"
                    :selected="tab.name">{{ tab.name }}</option>
            </select>
        </div>
        <div class="hidden sm:block">
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <button v-for="tab in tabs" :key="tab.name" :class="[currentTab === tab.name ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize']"
                        :aria-current="currentTab === tab.name ? 'page' : undefined"
                        @click="currentTab = tab.name">
                        {{ tab.name }}
                    </button>
                </nav>
            </div>
        </div>

        <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
            <li  v-for="(attachment, i) in data[currentTab]" :key="i"
                class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                    <!-- <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> -->
                    <span class="ml-2 flex-1 w-0 truncate">
                        {{ attachment.name }}
                    </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                    <a :href="attachment.href || '#download'" class="font-medium text-primary-600 hover:text-blue-500"> View </a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { formData as data } from '@composables/useInvention';
const tabs = [
    { name: 'inspirations' },
    { name: 'sketches' },
    { name: 'renders' },
    { name: 'prototypes' },
    { name: 'videos' },
]
const currentTab = ref(tabs[0].name)
const selectTab = (event) => {
    // console.log(event.target.value);
    currentTab.value = event.target.value
}
</script>