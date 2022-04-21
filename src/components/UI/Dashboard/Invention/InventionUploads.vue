<template>
    <DropZone class="drop-area" @files-dropped="addFiles($event, { activeTab })" @remove="removeFile"
        :meta="{ activeTab }" #default="{ dropZoneActive }">
        <label for="file-input" class="m-14 block text-center text-sm">
            <div v-if="dropZoneActive">
                <span>Drop Them Here</span>
                <span class="ml-1">to add them</span>
            </div>
            <div v-else>
                <span>Drag Your Files Here</span>
                <span>
                    or <strong><em>click here</em></strong> to select files
                </span>
                <p class="text-xs text-gray-500">
                    PDF, PNG, JPG, GIF, up to 10MB
                </p>
            </div>

            <input type="file" id="file-input" multiple @change="onInputChange" class="sr-only block text-center" />
        </label>
    </DropZone>

    <Tabs v-model="activeTab" :tabs="tabs" v-model:activeDisplayMode="activeDisplayMode" />

    <GalleryGrid v-model="files" @remove="removeFile" :tabs="tabs" v-bind="{ activeTab }" @moreDetails="showMoreDetails"
        :condition="tab => tab.slug === activeTab.slug">
        <!-- <li v-for="file in files.filter(f => f.meta.activeTab.slug === activeTab.slug)" :key="file.id" class="relative"
            v-if="file?.meta?.activeTab.slug === activeTab.slug">

            <FilePreview v-if="activeDisplayMode.component === 'FilePreview'" :item="file"
                @remove="$emit('remove', file)" />

            <FilePreviewCompact v-if="activeDisplayMode.component === 'FilePreviewCompact'" :item="file"
                @remove="$emit('remove', file)" />

        </li> -->
    </GalleryGrid>
    <FilePreviewPanel v-if="detailedItem" v-model:item="detailedItem" v-model:open="open" @remove="removeFile"
        @moreDetails="showMoreDetails" />
</template>

<script setup>
import useFileList from '@composables/file-list'
const { files, addFiles, removeFile } = useFileList()
const open = ref(true)
const detailedItem = ref(null)
const showMoreDetails = e => {
    console.log(e);
    detailedItem.value = e
    open.value = true
}
function onInputChange(e) {
    addFiles(e.target.files, { activeTab: activeTab.value })
    e.target.value = null
}

const tabs = ref([
    { name: 'Inspirations', slug: 'inspirations', href: '#inspirations' },
    { name: 'Sketches', slug: 'sketches', href: '#sketches' },
    { name: 'Renders', slug: 'renders', href: '#renders' },
    { name: 'Prototypes', slug: 'prototypes', href: '#prototypes' },
    { name: 'Videos', slug: 'videos', href: '#videos' },
    { name: 'Documents', slug: 'documents', href: '#documents' }
])
const activeTab = ref(tabs.value[0])
const activeDisplayMode = ref(null)
</script>
