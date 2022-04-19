<template>
    <main>
        <!-- Hero section -->
        <Hero
            :title="content.platform.intro.title"
            :subtitle="content.platform.intro.subtitle"
            :description="content.platform.intro.description" />

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
import { en } from '@/components/composables/useContent.js'
const content = computed(() => en)
</script>
