<template>
    <PageHeading title="My Profile"
        image="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        :actions="[
            { name: 'Edit', action: () => log('edit action')},
            { name: 'Save', action: () => log('save action'), primary: true }
        ]"
        :meta="[
            { icon: CalendarIcon , text: 'Joined in 2020' },
            { icon: LightBulbIcon, text: '4 projects' },
            { icon: HashtagIcon, text: '1'},
            { icon: CodeIcon, text: 'Loves Coding'}
        ]"
    />
    <ProfileUI />
</template>
<script setup>
import {CodeIcon, CalendarIcon, LightBulbIcon, HashtagIcon} from '@heroicons/vue/outline';
const log = str => console.log(str)
</script>
<route>
{
    meta: {
        layout: 'dashboard'
    }
}
</route>