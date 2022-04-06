<template>
    <main class="antialiased bg-body text-body font-body">
      <!-- intro -->
      <Intro />
      <!-- <PitchIntro /> -->
    
      <!-- what we do -->
      <PitchWhatWeDo />
    
      <!-- why does it matter -->
      <PitchWhyItMatters />
    
      <!-- value proposition -->
      <PitchValueProposition />
    
      <!-- community -->
      <PitchCommunity />
    
      <!-- platform -->
      <PitchPlatform />
    
      <!-- market stats -->
      <PitchMarket />
    
      <!-- contact us -->
      <PitchContact />
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
  CurrencyDollarIcon,
  ClipboardListIcon,
  LightBulbIcon,
  UserGroupIcon } from '@heroicons/vue/outline'
const valuePropositions = [
  {
    icon: CubeIcon,
    name: 'Innovative Platform',
    description: 'A web-based platform for creators to submit product ideas and monitor progress.'
  },
  {
    icon: ClipboardListIcon,
    name: 'Design Guidelines',
    description: 'A rigorous and discplined design-for-manufacturing journey that ensures ideas come out as quality products.'
  },
  {
    icon: CurrencyDollarIcon,
    name: 'Financial Advantage',
    description: 'Earnings and investment opportunities for the community.'
  }
]
const communityFeatures = [
  {
    name: 'Creators',
    description: 'Individual or group, DIY enthusiasts, or professional designers with product ideas.',
    icon: LightBulbIcon,
  },
  {
    name: 'Sponsors',
    description: 'Individuals looking for short-term investment opportunities with low risks',
    icon: UsersIcon,
  },
  {
    name: 'Partners',
    description: 'Our connection from manufacturers, retailers, logistic providers...etc',
    icon: UserGroupIcon,
  },
  {
    name: 'Valuable Customers',
    description: 'The end consumers who buy the end products thru our e-commerce channels',
    icon: HeartIcon,
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
  { id: 1, stat: '93%', emphasis: 'Internet users', rest: 'in Saudi Arabia are 93% of the total population.' },
  { id: 2, stat: '38B+', emphasis: '38+ Billion Saudi Riyal', rest: 'is spent yearly on online shopping.' },
  { id: 3, stat: '21M+', emphasis: 'The total number of online shoppers', rest: 'in Saudi Arabia is 21.43 millions' },
  { id: 4, stat: '70%', emphasis: 'The number of online stores', rest: 'has increased 70% in the past 4 years.' },
]
</script>
<route>
{
  meta: {
    layout: 'keynote'
  }
}
</route>