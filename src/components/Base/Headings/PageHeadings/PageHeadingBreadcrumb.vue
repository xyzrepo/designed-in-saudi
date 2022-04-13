<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li v-for="(item, index) in (fullPath || $route.fullPath).split('/').filter(p => p !== '')" :key="index">

            <div class="flex items-center" v-if="index === 0">
              <a :href="dashboard.navigation.find(n => n.href.includes(item))?.href" class="text-sm font-medium text-gray-500 hover:text-gray-700 capitalize">{{item}}</a>
            </div>

            <div class="flex items-center" v-if="index !== 0">
              <ChevronRightIcon class="rtl:hidden flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
              <ChevronLeftIcon class="hidden rtl:flex flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
              <a :href="dashboard.navigation.find(n => n.href.includes(item))?.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 capitalize">{{item}}</a>
            </div>

          </li>
        </ol>
      </nav>
</template>
<script setup>
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/outline';
import { dashboard } from '@content'
defineProps({ fullPath: String })
</script>