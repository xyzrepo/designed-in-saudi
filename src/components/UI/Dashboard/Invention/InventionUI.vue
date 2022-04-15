<template>
<InventionWizard>
    <Title>
    {{ steps[step]?.name || 'Complete' }}
    </Title>

    <InventionStep :step="0" title="Ready to invent?" subtitle="Start creating your first invention today." class="text-center"
        :action="{ name: `Let's get started` , fn: nextStep }"
    />
    
    <InventionStep :step="1" title="Invention Name" subtitle="Please give your invention a name and a description.">
       <InventionForm />
    </InventionStep>

    <InventionStep :step="2" title="Invention Category" :action="{ name: `Continue` , fn: nextStep }">
        <InventionCategory v-model="formData['category']" :categories="categories" />
    </InventionStep>
    
    <InventionStep :step="3" title="invention.welcome.title #4" subtitle="invention.welcome.subtitle #4"/>

    <InventionStep :step="4" title="Privacy Setting" subtitle="Please choose the privacy level you require">
        <PrivacySettingField v-model="formData['privacy']"/>
    </InventionStep>

    <InventionStep :step="steps.length" title="Review Your Submission" :action="{ name: 'Submit', fn: log('submit') }">
        <InventionReview :data="formData"/>
    </InventionStep>
    
</InventionWizard>
</template>
<script setup>
// import { ref, unref, reactive } from 'vue'
import { invention } from '@content'
import useInvention, { steps, step, formData, categories, nextStep } from '@composables/useInvention';
function log(s) { console.log(s) }
// const lastStep = computed(() => step.value === steps.value.length-1)
// const lastStepConfirmed = computed(() => step.value === steps.value.length)
// const emit = defineEmits(['complete'])
// const step = useInvention.step
// const formData = useInvention.formData
// const category = 
// const { formData } = useInvention()
invention.welcome = {
    title: 'Ready to invent?',
    subtitle: 'Start creating your first invention today.'
}
const updateFormData = (field) => {
    console.log('field:', field);
    return (payload) => { 
        formData[field] = payload;
    }
    // payload => { console.log(formData.value); formData.value[field] = payload; step.value++ }
}
const choose = (category) => { console.log(category); formData.value.category = category.slug; step.value++ }
// console.log(invention);
</script>