<template>
    <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only"> Privacy setting </RadioGroupLabel>
        <div class="-space-y-px rounded-md bg-white">
            <RadioGroupOption
                v-for="(setting, settingIdx) in settings"
                :key="setting.name"
                v-slot="{ checked, active }"
                as="template"
                :value="setting">
                <div
                    :class="[
                        settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                        settingIdx === settings.length - 1
                            ? 'rounded-bl-md rounded-br-md'
                            : '',
                        checked
                            ? 'border-indigo-200 bg-indigo-50'
                            : 'border-gray-200',
                        'relative flex cursor-pointer border p-4 focus:outline-none'
                    ]">
                    <span
                        :class="[
                            checked
                                ? 'border-transparent bg-indigo-600'
                                : 'border-gray-300 bg-white',
                            active
                                ? 'ring-2 ring-indigo-500 ring-offset-2'
                                : '',
                            'mt-0.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border'
                        ]"
                        aria-hidden="true">
                        <span class="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <div class="ml-3 flex flex-col">
                        <RadioGroupLabel
                            as="span"
                            :class="[
                                checked ? 'text-indigo-900' : 'text-gray-900',
                                'block text-sm font-medium'
                            ]">
                            {{ setting.name }}
                        </RadioGroupLabel>
                        <RadioGroupDescription
                            as="span"
                            :class="[
                                checked ? 'text-indigo-700' : 'text-gray-500',
                                'block text-sm'
                            ]">
                            {{ setting.description }}
                        </RadioGroupDescription>
                    </div>
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption } from '@headlessui/vue'

const settings = [
    {
        name: 'Public access',
        description:
            'This project would be available to anyone who has the link'
    },
    {
        name: 'Private to Project Members',
        description: 'Only members of this project would be able to access'
    },
    {
        name: 'Private to you',
        description: 'You are the only one able to access this project'
    }
]
const selected = ref(settings[0])
// const emit = defineEmits(['update'])
</script>
