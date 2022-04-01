<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <main>
      <!-- Hero section -->
      <Hero 
        title="Designed in Saudi"
        subtitle="We turn ideas into quality products"
        description="We are a Product Design Accelerator specialized in Design for Manufacturing (DFM) which is the process of designing parts, components or products for ease of manufacturing with an end goal of making a better product at a lower cost."
        />

      <!-- <Cards title="Our Projects"/> -->
      <!-- <BlogCards/> -->

      <!-- Logo Cloud -->
      <!-- <ShowcaseLogos :altStyle="true" title="Trusted by over 5 very average small businesses" /> -->

      <!-- Alternating Feature Sections -->
      <AlternatingFeatureSection />
      <FeaturesSection 
        title="The Value Proposition"
        subtitle="An Product Invention Accelerator"
        description=" "
        :features="valuePropositions" 
        :alt="true"
      />

      <CommunitySection 
        title="The Community" 
        subtitle="The Support Network" 
        description="" 
        :features="communityFeatures"
        :alt="true"
      />

      <FeaturesList title="All-in-one Ecosystem" subtitle="The Platform" :features="platformFeatures"/>
      <!-- Gradient Feature Section -->
      <!-- <FeaturesWithGradient title="The Value Proposition" subtitle="" :features="valuePropositions"/> -->
      <!-- Stats section -->
      <Stats :metrics="metrics"/>


      

      <!-- CTA Section -->
      <CTA />
    </main>
</template>

<script setup>
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  CubeIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
  CurrencyDollarIcon
} from '@heroicons/vue/outline'
const valuePropositions = [
  {
    icon: CubeIcon,
    name: 'Innovative Platform',
    description: 'A web-based platform for creators to submit product ideas and monitor progress.'
  },
  {
    icon: DocumentReportIcon,
    name: 'Design Guidelines',
    description: 'A rigorous and discplined design-for-manufacturing journey that ensures ideas come out as quality products.'
  },
  {
    icon: CurrencyDollarIcon,
    name: 'Financial Support',
    description: 'Earnings and investment opportunities for the community.'
  }
]
const communityFeatures = [
  {
    name: 'Creators',
    description: 'Individual or group, DIY enthusiasts, or professional designers with product ideas.',
    icon: InboxIcon,
  },
  {
    name: 'Sponsors',
    description: 'Individuals looking for short-term investment opportunities with low risks',
    icon: UsersIcon,
  },
  {
    name: 'Partners',
    description: 'Our connection from manufacturers, retailers, logistic providers...etc',
    icon: TrashIcon,
  },
  {
    name: 'Valuable Customers',
    description: 'The end consumers who buy the end products thru our e-commerce channels',
    icon: PencilAltIcon,
  }
]
const platformFeatures = [
  {
    name: 'Research',
    description: 'The first stage of the idea where the feasibility of design to be turned into a product.',
    icon: InboxIcon,
  },
  {
    name: 'Design',
    description: 'The phase where the design goes through a series of quality checks and the final specs defined',
    icon: UsersIcon,
  },
  {
    name: 'Manufacturing',
    description: 'Where the idea becomes a quality product.',
    icon: TrashIcon,
  },
  {
    name: 'Marketing',
    description: 'Initiate regular advertisement campaign to announce our product.',
    icon: PencilAltIcon,
  },
    {
      name: 'Retail and Distribution',
      description: 'selling the product through our e-channels or selling partners.',
      icon: ReplyIcon,
    },
  {
    name: 'Logistics',
    description: 'Shipping the product to e product to our stores from there to the end customer.',
    icon: DocumentReportIcon,
    }
]
const features = [
  {
    name: 'Individual Creators',
    description: 'Individual creators get to build a product portfolio, recieve community recognition, and generate passive income from their manfactured product ideas.',
    icon: InboxIcon,
  },
  {
    name: 'Sponsors',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: UsersIcon,
  },
  {
    name: 'Community feedback',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: TrashIcon,
  },
  {
    name: 'Marketing Campaigns',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: PencilAltIcon,
  },
  {
    name: 'Team Reporting',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: DocumentReportIcon,
  },
  {
    name: 'Saved Replies',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ReplyIcon,
  },
  {
    name: 'Email Commenting',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ChatAltIcon,
  },
  {
    name: 'Connect with Customers',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: HeartIcon,
  },
]
const metrics = [
  { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
  { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
  { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
  { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]
</script>