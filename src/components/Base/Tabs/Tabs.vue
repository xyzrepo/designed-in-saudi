<template>
    <!-- Tabs -->
    <div class="mt-3 sm:mt-2">
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select id="tabs" name="tabs" @change="selectTab" ref="tabsRef"
                class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option v-for="(tab, index) in tabs" :key="index" :value="tab.slug" :selected="index === 0">
                    {{ tab.name }}
                </option>
            </select>
        </div>
        <div class="hidden sm:block">
            <div class="flex items-center border-b border-gray-200">
                <nav class="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
                    <a v-for="(tab, index) in tabs" :key="index" :href="`#${tab.slug}`" @click.prevent="clickTab(index)"
                        :aria-current="tab.slug === activeTab.slug ? 'page' : undefined"
                        :class="[tab.slug === activeTab.slug ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md']">
                        {{ tab.name }}
                    </a>
                </nav>
                <slot>
                    <DisplayMode v-model="activeDisplayMode" @update:modelValue="setActiveDisplayMode" />
                </slot>
            </div>
        </div>
    </div>
</template>
<script setup>
const activeTab = ref(null)
const activeDisplayMode = ref(null)
const props = defineProps({
    tabs: Array,
    modelValue: [String, Object, Number, Array, Function],
})
const emit = defineEmits(['update:modelValue', "change", 'update:activeDisplayMode'])

const setActiveTabIndex = index => activeTab.value = props.tabs[index]

const clickTab = (tab) => {
    setActiveTabIndex(tab)
    emit('update:modelValue', activeTab.value)
}

const selectTab = event => {
    // setActiveTab(event.target.value)
    // console.log('tab selected', event.target.value);
    // console.log('tab selected', props.tabs.find(item => item.slug === event.target.value));
    activeTab.value = props.tabs.find(item => item.slug === event.target.value)
    // setActiveTabIndex(tabs.indexOf(event))
    emit('update:modelValue', activeTab.value)
}

const setActiveDisplayMode = (mode) => {
    activeDisplayMode.value = mode
    emit('update:activeDisplayMode', activeDisplayMode.value)
}
// setActiveTab(tabs[0].name)
setActiveTabIndex(0)
</script>