<template>
  <FeaturesSection 
        :title="title"
        :subtitle="subtitle"
        :description="description"
        :features="features" 
        :alt="alt" />
</template>

<script setup>
defineProps({
    title: {
      type: String,
      default: "The Value Proposition",
    },
    subtitle: {
      type: String,
      default: "An Product Invention Accelerator"
    },
    description: {
      type: String,
      default: " "
    },
    features: { 
      type: Array
    },
    alt: { 
      type: Boolean,
      default: true
    }
})
</script>