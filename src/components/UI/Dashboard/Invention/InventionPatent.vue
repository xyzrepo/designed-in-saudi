<template>
    
    <RadioCards v-model="formData.patent" label="Do you have a patent?" :options="patentOptions" />
    <ConfirmedInput label="Patent Number" v-model="formData.patent_number" v-if="formData?.patent?.id === 1" />
    <RadioCards v-model="formData.disclosed"
        label="Have you disclosed your idea publicly or to any third party who is not bound by a confidentiality provision?"
        :options="disclosureOptions" />
</template>

<script setup>
import { formData } from '@composables/useInvention';
const patentOptions = [{
    id: 1,
    name: 'Yes, I have a patent',
    description: 'I have patent protection covering the idea disclosed.'
},
{
    id: 2,
    name: 'Patent pending',
    description: 'I have a patent pending for the idea disclosed.'
},
{
    id: 3,
    name: 'No, I do not have a patent',
    description: 'I did not apply for patent protection for the idea disclosed.'
},
]
const disclosureOptions = [{
    id: 1,
    name: 'Yes, I told everyone',
    description: 'I disclosed my idea publicly.'
},
{
    id: 2,
    name: 'I told a few people',
    description: 'I disclosed my idea to third-party who is not bound by a confidentiality provision.'
},
{
    id: 3,
    name: 'I only told people with signed NDAs',
    description: 'I disclosed my idea to third party who is bound by a confidentiality provision.'
},
{
    id: 4,
    name: 'No, I did not tell anyone',
    description: 'I did not disclose my idea publicly nor to any third party who is not bound by a confidentiality provision.'
},
]
</script>
