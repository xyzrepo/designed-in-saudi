<template>
    <div>
        <div class="py-4">
            <div :data-active="active" @dragenter.prevent="setActive" @dragover.prevent="setActive"
                @dragleave.prevent="setInactive" @drop.prevent="onDrop"
                :class="{ 'border-primary-400': active, 'border-gray-200': !active }"
                class="h-48 rounded-lg border-4 border-dashed">
                <slot :dropZoneActive="active">
                    <label for="file-upload"
                        class="relative block w-full cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                        <!-- <span class="text-center">Upload a files</span> -->
                        <span class="text-center text-4xl text-gray-400">Drop Files Here</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple
                            @change="onInputChange" />
                    </label>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import useFileList from '@composables/file-list'
const { files, addFiles, removeFile } = useFileList()
const props = defineProps({ meta: Object })

function onInputChange(e) {
    addFiles(e.target.files, props.meta)
    console.log(e.target.files);
    e.target.value = null
}
const emit = defineEmits(["files-dropped", "change"]);

// Create `active` state and manage it with functions
let active = ref(false)
let inActiveTimeout = null // add a variable to hold the timeout key

function setActive() {
    active.value = true
    clearTimeout(inActiveTimeout) // clear the timeout
}
function setInactive() {
    // wrap it in a `setTimeout`
    inActiveTimeout = setTimeout(() => {
        active.value = false
    }, 50)
}

function onDrop(e) {
    setInactive(); // add this line too
    emit("files-dropped", [...e.dataTransfer.files], props.meta);
}

function preventDefaults(e) {
    e.preventDefault();
}

const events = ["dragenter", "dragover", "dragleave", "drop"];

onMounted(() => {
    events.forEach((eventName) => {
        document.body.addEventListener(eventName, preventDefaults);
    });
});

onUnmounted(() => {
    events.forEach((eventName) => {
        document.body.removeEventListener(eventName, preventDefaults);
    });
});
</script>
