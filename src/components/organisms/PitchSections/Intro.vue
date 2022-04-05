<template>
  <Hero
    class="sm:mt-10"
    :title="title"
    :subtitle="subtitle"
    :description="description"
  />
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Designed in Saudi"
  },
  subtitle: {
    type: String,
    default: "We turn ideas into quality products"
  },
  description: { 
    type: String,
    default: "We are a Product Design Accelerator specialized in Design for Manufacturing (DFM) which is the process of designing parts, components or products for ease of manufacturing with an end goal of making a better product at a lower cost."
  }
})
</script>
