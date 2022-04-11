<template>
    <main>
      <!-- Hero section -->
      <Hero 
        :title="content.intro.title"
        :subtitle="content.intro.subtitle"
        :description="content.intro.description"
      />

      <!-- <Cards title="Our Projects"/> -->
      <!-- <BlogGrid/> -->

      <!-- Logo Cloud -->
      <!-- <ShowcaseLogos :altStyle="true" title="Trusted by over 5 very average small businesses" /> -->

      <!-- Alternating Feature Sections -->
      <!-- <AlternatingFeatureSection /> -->

      <!-- Gradient Feature Section -->
      <!-- <FeaturesWithGradient :features="features"/> -->

      <!-- Stats section -->
      <!-- <Stats :metrics="metrics"/> -->

      <!-- CTA Section -->
      <!-- <CTA /> -->
    </main>
</template>

<script setup>
import { computed } from 'vue'
import { en } from '@/components/composables/useContent.js';
const content = computed(() => en)
</script>