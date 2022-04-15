<template>
<div class="space-y-6">
    <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Invention Name</label>
        <div class="mt-1">
            <input v-model="formData.name" type="text" name="name" id="name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Awesome Invention Name" aria-describedby="title-description" />
        </div>
        <p class="mt-2 text-sm text-gray-500" id="email-description">We'll use this to add help text.</p>
    </div>
    <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Explain your invention in one line</label>
        <div class="mt-1">
            <input v-model="formData.caption" type="text" name="caption" id="caption" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="A shoes that can help you fly" aria-describedby="caption-description" />
        </div>
        <p class="mt-2 text-sm text-gray-500" id="email-description">We'll use this to add help text.</p>
    </div>
    <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Describe your invention in a short paragraph</label>
        <div class="mt-1">
            <textarea v-model="formData.description" rows="4" name="description" id="description" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
    </div>
</div>
</template>
<script setup>
import {formData} from '@composables/useInvention';
</script>