<template>
    <div class="relative pt-16 pb-32 overflow-hidden">
        <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
        <div class="relative">
            <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                    <div>
                        <!-- <div>
                            <span class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                            <InboxIcon class="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                        </div> -->
                        <div class="mt-6">
                            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">What We Do</h2>
                            <p class="mt-4 text-lg text-gray-500">We enable individuals to submit product ideas through our invention platform and we turn their ideas into quality products by utilizing our partner network of experts, sponsors, and manufacturers.</p>
                            <!-- <div class="mt-6">
                            <a href="#" class="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"> Get started </a>
                            </div> -->
                        </div>
                    </div>
                    <!-- <div class="mt-8 border-t border-gray-200 pt-6">
                        <blockquote>
                            <div>
                            <p class="text-base text-gray-500">&ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;</p>
                            </div>
                            <footer class="mt-3">
                            <div class="flex items-center space-x-3">
                                <div class="flex-shrink-0">
                                <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                                </div>
                                <div class="text-base font-medium text-gray-700">Marcia Hill, Digital Marketing Manager</div>
                            </div>
                            </footer>
                        </blockquote>
                        </div> -->
                </div>
                <div class="mt-12 sm:mt-16 lg:mt-0">
                    <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                        <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" 
                        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f44e9d07-fffc-4381-9492-31c17ff63347/what_we_do.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220401T234410Z&X-Amz-Expires=86400&X-Amz-Signature=319173cce41eb4d4a27ba04e643c3ec272f8d6150e65c8e5efe019ca4982824e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22what%2520we%2520do.jpg%22&x-id=GetObject" alt="Workspace" />
                        <!-- <div class="absolute lg:right-5 lg:rounded-xl lg:shadow-xl inset-0 bg-gradient-to-r from-purple-200 to-indigo-100 mix-blend-multiply" /> -->
                    </div>                                
                </div>
            </div>
        </div>
        <div class="mt-24">
            <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                    <div>
                        <!-- <div>
                            <span class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                            <SparklesIcon class="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                        </div> -->
                        <div class="mt-6 ml-0">
                            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Why Does It Matter?</h2>
                            <p class="mt-4 text-md text-gray-500">
                                <!-- class="-my-5 divide-y divide-gray-200" -->
                                <ul role="list">
                                    <li v-for="(point, i) in points" :key="i" class="py-2">
                                        <div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
                                        <!-- <CheckIcon class="h-6 w-6" aria-hidden="true" /> -->
                                            <!-- <h3 class="text-sm font-semibold text-gray-800">
                                                        <a href="#" class="hover:underline focus:outline-none"> -->
                                            <!-- Extend touch target to entire panel -->
                                            <!-- <span class="absolute inset-0" aria-hidden="true" /> {{ point }}
                                                        </a>
                                                    </h3> -->
                                            <!-- <p class="mt-1 text-sm text-gray-600 line-clamp-2"> -->
    
                                            {{ point }}
                                            <!-- </p> -->
                                        </div>
                                    </li>
                                </ul>
                            </p>
                            <!-- <div class="mt-6">
                                        <a href="#" class="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"> Get started </a>
                                    </div> -->
                        </div>
                    </div>
                </div>
                <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                    <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                        <img class="object-cover w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/97e8c465-b226-4072-a66a-7d8d149fb0a3/the-77-human-needs-system-axK93Sfmflc-unsplash.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220401T233319Z&X-Amz-Expires=86400&X-Amz-Signature=290333dc1a6e057d4017fd2b0745a9f32f41895868d0c41ba15f6bafc3c91278&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22the-77-human-needs-system-axK93Sfmflc-unsplash.jpg%22&x-id=GetObject" alt="Customer profile user interface" />
                        <!-- <div class="absolute lg:-ml-20 lg:rounded-xl lg:shadow-xl inset-0 bg-gradient-to-r from-purple-200 to-indigo-100 mix-blend-multiply" />                         -->
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    QuestionMarkCircleIcon,
    ReplyIcon,
    SparklesIcon,
    TrashIcon,
    UsersIcon,
    CheckIcon,
    XIcon,
} from '@heroicons/vue/outline'
const points = [
    'Its difficult for individuals to manufacture an idea into a quality product.',
    'Its not easy for individuals to sell, market and deliver the product at scale.',
    'Lack of investment opportunities for individuals with conservative capital.',
    'Finding a sustainable secondary source of income is not an easy task.',
    'General lack of inventions in the sector of light manufactured consumer products in Saudi Arabia.'
]
// defineProps({

// })
</script>