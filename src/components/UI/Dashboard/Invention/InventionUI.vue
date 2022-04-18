<template>
<InventionWizard :steps="steps">
    <!-- <Title>
    {{ steps[step]?.name || 'Complete' }}
    </Title> -->
    <span id="top"></span>
    
    <InventionStep :step="0" title="Ready to invent?" subtitle="Start creating your first invention today." class="text-center pt-24"
        :action="{ name: `Let's get started` , fn: nextStep }"
    />
    
    <InventionStep :step="1" title="Invention Information" subtitle="Tell us a little bit about your invention.">
       <InventionForm />
    </InventionStep>

    <InventionStep :step="2" title="Category" :action="{ name: `Continue`, fn: nextStep }">
        <RadioCards :grid="true" v-model="formData.category" label="Category" :options="categories" />
        <RadioCards :grid="true" v-if="formData.category?.subcategories?.length > 0" 
        v-model="formData.subcategory" label="Subcategory" :options="formData.category.subcategories"/>
    </InventionStep>

    <InventionStep :step="3" title="Files and Resources" subtitle="Inspirations, sketches, prototypes, renders, and videos">
        <!-- <InventionPatent /> -->
    </InventionStep>

    <InventionStep :step="4" title="Patent and Disclosure" subtitle="invention.welcome.subtitle #4">
        <InventionPatent />
    </InventionStep>

    <InventionStep :step="5" title="Privacy Setting" subtitle="Please choose the privacy level you require">
        <RadioCards v-model="formData.privacy_level" label="Privacy" :options="privacyOptions" />
    </InventionStep>

    <InventionStep :step="6" title="Review Your Submission" :action="{ name: 'Submit', fn: () => submit }">
        <InventionReview :data="formData"/>
    </InventionStep>
    <span id="bottom"></span>
</InventionWizard>
</template>
<script setup>
import { formData, categories, nextStep, privacyOptions } from '@composables/useInvention';
const steps = ref([
    { name: 'Step 1' },
    { name: 'Step 2' },
    { name: 'Step 3' },
    { name: 'Step 4' },
    { name: 'Step 5' },
    { name: 'Step 6' }
])
const submit = () => { console.log('complete') }
</script>