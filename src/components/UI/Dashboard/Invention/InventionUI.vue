<template>
<InventionWizard >
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

    <InventionStep :step="2" title="Category" :action="{ name: `Continue` , fn: nextStep }">
        <RadioCards v-model="formData.category" label="Category" :options="categories" />
        <RadioCards v-model="formData.subcategory" label="Subcategory" :options="formData.category.subcategories" 
            v-if="formData.category?.subcategories?.length > 0" />
    </InventionStep>

    <!-- <InventionStep :step="3" title="Sub Category" :action="{ name: `Continue` , fn: nextStep }">
        <RadioCards 
            v-model="formData.subcategory"
            :options="formData.category.subcategories" 
            v-if="formData.category?.subcategories?.length > 0"
            />
    </InventionStep> -->
        <!-- <InventionCategory v-model="formData.subcategory" :categories="formData.category.subcategories" /> -->
    
    <InventionStep :step="3" title="Patent and Disclosure" subtitle="invention.welcome.subtitle #4">
        <InventionPatent />
    </InventionStep>

    <InventionStep :step="4" title="Privacy Setting" subtitle="Please choose the privacy level you require">
        <PrivacySettingField v-model="formData['privacy']"/>
    </InventionStep>

    <InventionStep :step="5" title="Review Your Submission" :action="{ name: 'Submit', fn: () => submit }">
        <InventionReview :data="formData"/>
    </InventionStep>
    <span id="bottom"></span>
</InventionWizard>
</template>
<script setup>
import useInvention, { steps, step, formData, categories, nextStep } from '@composables/useInvention';
const submit = () => { console.log('complete') }
// const updateFormData = (field) => {
//     console.log('field:', field);
//     return (payload) => { 
//         formData[field] = payload;
//     }
//     // payload => { console.log(formData.value); formData.value[field] = payload; step.value++ }
// }
</script>