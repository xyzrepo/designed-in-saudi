<template>
    <DashboardLayout :title="dashboard.title">
        <router-view></router-view>
    </DashboardLayout>
</template>
<script setup>
import { dashboard } from '@content'
</script>
