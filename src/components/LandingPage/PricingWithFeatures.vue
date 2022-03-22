<template>
    <div class="bg-gradient-to-b from-white to-gray-50">
      <!-- Pricing section with single price and feature list -->
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span class="text-gray-900">Everything you need for </span>
              <span class="text-purple-600">free</span>
            </h1>
            <p class="mt-5 text-xl text-gray-500">Includes every feature we offer plus unlimited projects and unlimited users.</p>
          </div>
          <a href="#" class="mt-8 w-full bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-purple-700 sm:mt-10 sm:w-auto xl:mt-0">Get started today</a>
        </div>
        <div class="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 class="text-base font-semibold text-purple-600 uppercase tracking-wide">Everything you need</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900">All-in-one platform</p>
            <p class="mt-4 text-lg text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
          </div>
          <div class="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="(feature, featureIdx) in features.slice(0, 5)" :key="feature" :class="[featureIdx === 0 ? 'md:py-0 md:pb-4' : '', 'py-4 flex']">
                <CheckIconOutline class="flex-shrink-0 h-6 w-6 text-purple-500" aria-hidden="true" />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
            </ul>
            <ul role="list" class="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
              <li v-for="(feature, featureIdx) in features.slice(5)" :key="feature" :class="[featureIdx === 0 ? 'md:border-t-0 md:py-0 md:pb-4' : '', 'py-4 flex']">
                <CheckIconOutline class="flex-shrink-0 h-6 w-6 text-purple-500" aria-hidden="true" />
                <span class="ml-3 text-base text-gray-500">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon as CheckIconOutline,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { CheckIcon as CheckIconSolid, ChevronDownIcon } from '@heroicons/vue/solid'
const features = [
  'Vitae in pulvinar odio id utobortis in inter.',
  'Sed sed id viverra viverra augue eget massa.',
  'Urna, gravida amet, a, integer venenatis.',
  'Lobortis sed pharetra amet vitae eleifend.',
  'Ullamcorper blandit a consequat donec elit aoreet.',
  'Dolor quo assumenda.',
  'Esse rerum distinctio maiores maiores.',
  'Eos enim officiis ratione.',
  'Tempore molestiae aliquid excepturi.',
  'Perspiciatis eveniet inventore eum et aliquam.',
]
</script>