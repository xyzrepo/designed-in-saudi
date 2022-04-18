import { ref, unref, computed } from 'vue'
export const status = {
    pending: 'Draft',
    published: 'Published',
    submitted: 'Submitted',
    awaiting: 'Awaiting Update',
    approved: 'Approved',
    rejected: 'Rejected',
    processing: 'Processing',
}
export const step = ref(0)
export const steps = ref([])
    // { name: 'Step 1', href: '/dashboard/inventions', status: 'current' },
    // { name: 'Step 2', href: '/dashboard/inventions', status: 'upcoming' },
    // { name: 'Step 3', href: '#', status: 'upcoming' },
    // { name: 'Step 4', href: '#', status: 'upcoming' },
    // { name: 'Step 5', href: '#', status: 'upcoming' },
// ])
export const currentStep = computed(() => steps.value[step])
export const categories = ref([
    { id: 1, slug: 'fashion', name: 'Fashion', description: 'Apparel and accessories', meta: '# extra meta data', 
        subcategories: [
            { slug: 'tshirt', name: 'T-Shirt', description: 'Men, women, teens, and children t-shirts' },
            { slug: 'hoodie', name: 'Hoodie', description: '' },
            { slug: 'pants', name: 'Pants', description: '' },
            { slug: 'cap', name: 'Cap', description: '' },
            { slug: 'dress', name: 'dress', description: '' },
            { slug: 'suit', name: 'suit', description: '' },
        ] 
    },
    { id: 2, slug: 'gadgets', name: 'Gadgets', description: 'Electronics and stuff', meta: '# extra meta data', subcategories: [] },
    { id: 3, slug: 'furniture', name: 'Furniture', description: 'Furniture and other household items', meta: '# extra meta data', subcategories: [] },
    { id: 4, slug: 'home', name: 'Home & Kitchen', description: 'Home and kitchen related products', meta: '# extra meta data', subcategories: [] },
    { id: 5, slug: 'sports', name: 'Sports & Fitness', description: 'Fitness and sports related products', meta: '# extra meta data', subcategories: [] },
    { id: 6, slug: 'outdoor', name: 'Outdoor', description: 'Gardening and camping', meta: '# extra meta data', subcategories: [] },
    { id: 7, slug: 'games', name: 'Games & Toys', description: 'Board games and kids toys', meta: '# extra meta data', subcategories: [] },
    { id: 8, slug: 'office', name: 'Work & Office', description: 'Work and office products', meta: '# extra meta data', subcategories: [] },
    { id: 9, slug: 'other', name: 'Miscellaneous ', description: 'Anything not listed already', meta: '# extra meta data', subcategories: [] },
])
export const formData = ref({
    name: null,
    caption: null,
    description: null,
    category: null,
    subcategory: null,
    features: null,
    patent: null,
    patent_number: null,
    disclosed: null,
    inspirations: [
        { name: 'logo' },
        { name: 'logo' },
        { name: 'logo' },
        { name: 'logo' }
    ],
    sketches: [
        { name: 'sketch' },
        { name: 'sketch' },
        { name: 'sketch' },
        { name: 'sketch' }
    ],
    renders: [
        { name: 'render' },
        { name: 'render' },
        { name: 'render' },
        { name: 'render' }
    ],
    prototypes: [
        { name: 'prototype' },
        { name: 'prototype' },
        { name: 'prototype' },
        { name: 'prototype' }
    ],
    videos: [
        // { name: 'video' },
        // { name: 'video' },
        // { name: 'video' },
        // { name: 'video' }
    ],
    privacy_level: null,
    status: status.pending,
    // internal_notes: [],
    // external_notes: []
})
export const nextStep = (condition = true) => {
    if (condition === false) return;

    if (steps.value[step.value]) steps.value[step.value].status = 'complete'; 

    if (step.value < steps.value.length) { step.value++; }

    if (steps.value[step.value]) steps.value[step.value].status = 'current';
    console.log(step.value, steps.value.length);
}
export const prevStep = (condition = true) => {
    if (condition === false) return;

    if (steps.value[step.value]) steps.value[step.value].status = 'upcoming';

    if (step.value > 0) { step.value--; }

    if (steps.value[step.value]) steps.value[step.value].status = 'current';

    console.log(step.value, steps.value.length);
}
export const privacyOptions = [
    { slug: 'public', name: 'Public access', description: 'This project would be available to anyone who has the link' },
    { slug: 'team', name: 'Private to Team Members', description: 'Only members of this project would be able to access' },
    { slug: 'private', name: 'Private to you', description: 'You are the only one able to access this project' },
]
export const patentOptions = [
    { id: 1, name: 'Yes, I have a patent', description: 'I have patent protection covering the idea disclosed.' },
    { id: 2, name: 'Patent pending', description: 'I have a patent pending for the idea disclosed.' },
    { id: 3, name: 'No, I do not have a patent', description: 'I did not apply for patent protection for the idea disclosed.' },
]
export const disclosureOptions = [
    { id: 1, name: "Yes, I told everyone", description: "I disclosed my idea publicly." },
    { id: 2, name: "I told a few people", description: "I disclosed my idea to third-party who is not bound by a confidentiality provision." },
    { id: 3, name: "I only told people with signed NDAs", description: "I disclosed my idea to third party who is bound by a confidentiality provision." },
    { id: 4, name: "No, I did not tell anyone", description: "I did not disclose my idea publicly nor to any third party who is not bound by a confidentiality provision." },
]
export default () => ({
        status,
        step: reactive(step),
        steps: reactive(steps),
        // currentStep: reactive(currentStep),
        categories: reactive(categories),
        formData: reactive(formData),
        nextStep,
        prevStep,
        privacyOptions,
        patentOptions,
        disclosureOptions
       
})