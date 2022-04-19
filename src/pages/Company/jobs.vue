<template>
<section>
    <PageHeading 
    title="Available Positions"
    :meta="[{ text: 'Updated yesterday'}]"
    :actions="[
        { name: 'Apply', action: () => log('apply action'), primary: true }
    ]" />
    <Empty v-if="!positions.length" name="job" />
    <List v-else :items="positions" :component="PositionCard" />
</section>
</template>
<script setup>
import PositionCard from '@/components/Base/Cards/PositionCard.vue';
const log = (s) => console.log(s)
const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
]
</script>
<route>
{
    meta: {
        layout: 'dashboard'
    }
}
</route>