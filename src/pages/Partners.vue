<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <BrandedHeading :title="content.platform.intro.title" :subtitle="content.platform.intro.subtitle" />
  <PartnersList />
</template>

<script setup>
import content from '@/components/composables/useContent';
</script>
