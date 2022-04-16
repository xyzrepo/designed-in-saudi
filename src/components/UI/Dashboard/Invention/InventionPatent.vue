<template>
    <RadioCards 
        label="Do you have a patent?" 
        :options="patentOptions" 
        v-model="formData.patent" :grid="false" 
    />
    <ConfirmedInput 
        label="Patent Number" 
        v-model="formData.patent_number" 
        v-if="formData?.patent?.id === 1" 
    />
    <RadioCards 
        label="Have you disclosed your idea publicly or to any third party who is not bound by a confidentiality provision?" 
        :options="disclosureOptions" 
        v-model="formData.disclosed" 
        :grid="false" 
    />
</template>

<script setup>
import { formData, patentOptions, disclosureOptions } from "@composables/useInvention";
const confirmed = ref(false);
defineProps({});
</script>
