<template>
    <CardHeading title="Manage Ideas" button="Create a new idea" :action="newIdea"/>
    <Empty v-if="!ideas.length" name="idea" :action="newIdea" />
    <List v-else="ideas.length"/>
    <!-- {{ ideas }} -->
</template>
<script setup>
import { ref } from 'vue'
const ideas = ref([])
const newIdea = () => ideas.value.push('New IDEA')
</script>
<route>
{
    meta: {
        layout: 'dashboard'
    }
}
</route>