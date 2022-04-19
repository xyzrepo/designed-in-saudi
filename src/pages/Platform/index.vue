<template>
<div class="snap-y snap-mandatory overflow-scroll">
    <BrandedHeading 
        :title="content.platform.intro.title"
        :subtitle="content.platform.subtitle"
        image="https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80" />
    <FeaturesGrid
        :title="content.platform.title"
        :features="content.platform.features" />
</div>
</template>
<script setup>
import content from '@content';
</script>