<template>
    <PageHeading 
        :actions="[
            validStep
                ? { name: 'Previous', action: prevStep }
                : { name: 'Back', action: prevStep },
            validStep
                ? { name: 'Next', action: nextStep, primary: true } 
                : { name: 'Confirm and Submit', action: scrollToSubmit, primary: true },
            
        ]">
        
        <template #actions v-if="step === 0">
            <span></span>
        </template>

        <template #breadcrumb >
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
const scrollToSubmit = () => {
    let element = document.getElementById("bottom");
    console.log(element);
    element.scrollIntoView({ behavior: 'smooth' });
}
const validStep = computed(() => step.value < steps.value.length)
const props = defineProps({ 
    steps: {
        type: Array, 
        default: [
            { name: 'Step 1', status: 'upcoming' },
            { name: 'Step 2' },
            { name: 'Step 3' },
            { name: 'Step 4' },
            { name: 'Step 5' },
            { name: 'Step 6' },
        ]
    }
})
steps.value = props.steps
steps.value[0].status = 'current'
</script>