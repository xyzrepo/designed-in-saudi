<template>
<InventionWizard>
    <Title>
    {{ steps[step]?.name || 'Complete' }}
    </Title>
    <InventionWelcome v-show="step === 0" 
        :title="invention.welcome.title" 
        :subtitle="invention.welcome.subtitle" 
        :action="nextStep"
    />
    
    <InventionCategory v-show="step === 1" v-model="formData['category']" :categories="categories" />

    <InventionWelcome v-show="step === 2" 
        title="invention.welcome.title #3"
        subtitle="invention.welcome.subtitle #3"
        :action="() => step++"
    />
    <InventionWelcome v-show="step === 3" 
        title="invention.welcome.title #4"
        subtitle="invention.welcome.subtitle #4"
        :action="() => step++"
    />

    <InventionWelcome v-show="lastStep" 
        title="invention.welcome.title #last"
        subtitle="invention.welcome.subtitle #last"
        :action="() => emit('complete')"
    />

    <InventionWelcome v-show="lastStepConfirmed" 
        title="invention.welcome.title #confirmed"
        subtitle="invention.welcome.subtitle #confirmed"
        :action="() => emit('complete')"
    />
    
</InventionWizard>
</template>
<script setup>
// import { ref, unref, reactive } from 'vue'
import { invention } from '@content'
import useInvention, { steps, step, formData, categories, nextStep } from '@composables/useInvention';
const lastStep = computed(() => step.value === steps.value.length-1)
const lastStepConfirmed = computed(() => step.value === steps.value.length)
const emit = defineEmits(['complete'])
// const step = useInvention.step
// const formData = useInvention.formData
// const category = 
// const { formData } = useInvention()
console.log(formData);
invention.welcome = {
    title: 'Ready to invent?',
    subtitle: 'Start creating your first invention today.'
}
const updateFormData = (field) => {
    console.log('field:', field);
    return (payload) => { 
        formData[field] = payload;
        step++
    }
    // payload => { console.log(formData.value); formData.value[field] = payload; step.value++ }
}
const choose = (category) => { console.log(category); formData.value.category = category.slug; step.value++ }
// console.log(invention);
</script>