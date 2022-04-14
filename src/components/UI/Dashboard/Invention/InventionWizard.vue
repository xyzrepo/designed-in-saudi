<template>
    <PageHeading 
        
        :actions="[
            validStep
                ? { name: 'Previous', action: prevStep }
                : { name: 'Continue Editing', action: prevStep },
            validStep
                ? { name: 'Next', action: nextStep, primary: true } 
                : { name: 'Confirm and Submit', action: nextStep, primary: true },
            
        ]">
        
        <template #actions v-if="step === 0">
            <!-- hide default action buttons -->
            <span> </span>
        </template>

        <template #breadcrumb>
            <StepsCircle :steps="steps"/>
        </template>

        <template #meta>
            <span></span>
            <!-- <StepsCircle/> -->
        </template>

        <slot/>
    </PageHeading>
</template>
<script setup>
import { step, steps, nextStep, prevStep } from '@composables/useInvention';
const validStep = computed(() => step.value < steps.value.length)
</script>