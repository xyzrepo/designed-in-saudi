<template>
  <main class="bg-body text-body font-body antialiased">
    <!-- intro -->
    <Intro
      :title="content.intro.title"
      :subtitle="content.intro.subtitle"
      :description="content.intro.description"
    />
    <!-- <PitchIntro /> -->

    <!-- what we do -->
    <PitchWhatWeDo 
      :title="content.whatWeDo.title"
      :description="content.whatWeDo.description"
    />

    <!-- why does it matter -->
    <PitchWhyItMatters 
      :title="content.whyItMatters.title"
      :items="content.whyItMatters.items"
    />

    <!-- value proposition -->
    <PitchValueProposition 
      :title="content.valueProposition.title"
      :subtitle="content.valueProposition.subtitle"
      :items="content.valueProposition.items"
    />

    <!-- community -->
    <PitchCommunity 
      :title="content.community.title"
      :subtitle="content.community.subtitle"
      :items="content.community.items"
    />

    <!-- platform -->
    <PitchPlatform 
      :title="content.platform.title"
      :subtitle="content.platform.subtitle"
      :items="content.platform.items"
    />

    <!-- market stats -->
    <PitchMarket 
      :title="content.market.title"
      :subtitle="content.market.subtitle"
      :description="content.market.description"
      :items="content.market.items"
    />

    <!-- contact us -->
    <PitchContact />
  </main>
</template>

<script setup>
import { useAttrs, computed, readonly, ref, reactive } from "vue";
import usePitchContent from "~/components/composables/usePitchContent";
const attrs = useAttrs();
// const dir = ref(attrs.dir);
const ar = usePitchContent('rtl')
const en = usePitchContent('ltr')
const content = computed(() => attrs.dir === 'rtl' ? ar : en)
</script>
<route>
{
  meta: {
    layout: 'keynote'
  }
}
</route>
