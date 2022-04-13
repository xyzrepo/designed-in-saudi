<template>
    <!-- <Steps/> -->
    <PageHeading title="My Ideas"
    :meta="[{ text: 'Author: XYZ'}]"
    :actions="[
        { name: 'Create a new idea', action: newIdea, primary: true }
    ]">
        <Empty v-if="!positions.length" name="idea" :action="newIdea" />
        <List v-else :items="positions" :component="PositionCard"/>
    </PageHeading>
    <!-- {{ ideas }} -->
</template>
<script setup>
import PositionCard from '@/components/Base/Cards/PositionCard.vue';
const ideas = ref([])
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
const newIdea = () => ideas.value.push('New IDEA')
</script>
<route>
{
    meta: {
        layout: 'dashboard'
    }
}
</route>