<template>
    <RadioCards v-model="formData.patent" label="Do you have a patent?" :options="patentOptions" />
    <ConfirmedInput v-if="formData?.patent?.id === 1" v-model="formData.patent_number" label="Patent Number" />
    <RadioCards v-model="formData.disclosed" :options="disclosureOptions" 
        label="Have you disclosed your idea publicly or to any third party who is not bound by a confidentiality provision?">
    </RadioCards>
</template>

<script setup>
import { formData, patentOptions, disclosureOptions } from "@composables/useInvention";
const confirmed = ref(false);
defineProps({});
</script>
