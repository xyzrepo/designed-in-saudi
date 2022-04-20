<template>
  <div class="mt-5 flex lg:mt-0 lg:ml-4">
    <span v-for="(item, index) in actions" :key="index" class="z-10 block" :class="{ 'ml-3': !!index }">
      <button v-if="item.primary" type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="item.action">
        <component :is="item.icon" class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        {{ item.name }}
      </button>
      <button v-else type="button"
        class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="item.action">
        <component :is="item.icon" class="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
        {{ item.name }}
      </button>
    </span>

    <!-- Dropdown -->
    <!-- <Menu as="span" class="ml-3 relative sm:hidden z-10">
        <MenuButton class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Actions
          <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
        </MenuButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="origin-top-left absolute left-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-slot="{ active }" v-for="(item, index) in actions" :key="index">
              <a href="#" @click.prevent="item.action" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{item.name}}</a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu> -->
  </div>
</template>
<script setup>
import { ChevronDownIcon } from '@heroicons/vue/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
const active = ref(false)
defineProps({ actions: { type: Array, required: true } })
</script>
