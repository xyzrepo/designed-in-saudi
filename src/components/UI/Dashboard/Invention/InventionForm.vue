<template>
    <div class="space-y-6 py-6">
        <div>
            <label for="name" class="block text-2xl font-medium text-gray-700">Invention Name</label>
            <div class="mt-1">
                <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    name="name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
                    placeholder="Awesome Invention Name"
                    aria-describedby="title-description" />
            </div>
            <!-- <p class="mt-2 text-sm text-gray-500" id="email-description">We'll use this to add help text.</p> -->
        </div>
        <div>
            <label for="name" class="block text-2xl font-medium text-gray-700">Explain your invention in one line</label>
            <div class="mt-1">
                <input
                    id="caption"
                    v-model="formData.caption"
                    type="text"
                    name="caption"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
                    placeholder="A shoes that can help you fly"
                    aria-describedby="caption-description" />
            </div>
            <!-- <p class="mt-2 text-sm text-gray-500" id="email-description">We'll use this to add help text.</p> -->
        </div>
        <div>
            <label
                for="description"
                class="block text-2xl font-medium text-gray-700">Describe your invention in a short paragraph</label>
            <div class="mt-1">
                <textarea
                    id="description"
                    v-model="formData.description"
                    rows="4"
                    name="description"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl" />
            </div>
        </div>
        <InventionFeatures v-model="formData.features" />
    </div>
</template>
<script setup>
import { formData } from '@composables/useInvention'
</script>
