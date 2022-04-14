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
export const steps = ref([
    { name: 'Step 1', href: '/dashboard/inventions', status: 'current' },
    { name: 'Step 2', href: '/dashboard/inventions', status: 'upcoming' },
    { name: 'Step 3', href: '#', status: 'upcoming' },
    { name: 'Step 4', href: '#', status: 'upcoming' },
    { name: 'Step 5', href: '#', status: 'upcoming' },
])
export const currentStep = computed(() => steps.value[step])
export const categories = ref([
    { id: 1, slug: 'fashion', name: 'Fashion', description: 'Apparel and accessories', meta: '# extra meta data' },
    { id: 2, slug: 'gadgets', name: 'Gadgets', description: 'Electronics and stuff', meta: '# extra meta data' },
    { id: 3, slug: 'furniture', name: 'Furniture', description: 'Furniture and other household items', meta: '# extra meta data' },
    { id: 4, slug: 'home', name: 'Home & Kitchen', description: 'Home and kitchen related products', meta: '# extra meta data' },
    { id: 5, slug: 'sports', name: 'Sports & Fitness', description: 'Fitness and sports related products', meta: '# extra meta data' },
    { id: 6, slug: 'outdoor', name: 'Outdoor', description: 'Gardening and camping', meta: '# extra meta data' },
    { id: 7, slug: 'games', name: 'Games & Toys', description: 'Board games and kids toys', meta: '# extra meta data' },
    { id: 8, slug: 'office', name: 'Work & Office', description: 'Work and office products', meta: '# extra meta data' },
    { id: 9, slug: 'other', name: 'Miscellaneous ', description: 'Anything not listed already', meta: '# extra meta data' },
])
export const formData = ref({
    name: 'UNTITLED',
    caption: '',
    description: '',
    category: '',
    features: [],
    patented: false,
    patent_number: '',
    disclosed: false,
    inspiration: [],
    sketches: [],
    renders: [],
    prototypes: [],
    video: [],
    private: true,
    status: '',
    internal_notes: [],
    external_notes: []
})
export const nextStep = () => {
    if (steps.value[step.value]?.status) { steps.value[step.value].status = 'complete'; }
    if (step.value < steps.value.length) { step.value++; }
    if (steps.value[step.value]?.status) { steps.value[step.value].status = 'current'; }
    console.log(step.value, steps.value.length);
}
export const prevStep = () => {
    if (steps.value[step.value]?.status) { steps.value[step.value].status = 'upcoming'; }
    if (step.value > 0) { step.value--; }
    if (steps.value[step.value]?.status) { steps.value[step.value].status = 'current'; }
    console.log(step.value, steps.value.length);
    
}
export default () => ({
        status,
        step: reactive(step),
        steps: reactive(steps),
        // currentStep: reactive(currentStep),
        categories: reactive(categories),
        formData: reactive(formData),
        nextStep,
        prevStep
       
})