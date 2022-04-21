import { ref } from 'vue'

export default function () {
    const files = ref([])

    function addFiles(newFiles, meta = {}) {
        let newUploadableFiles = [...newFiles]
            .map(file => new UploadableFile(file, meta))
            .filter(file => !fileExists(file.id))
        files.value = files.value.concat(newUploadableFiles)
    }

    function fileExists(otherId) {
        return files.value.some(({ id }) => id === otherId)
    }

    function removeFile(file) {
        console.log('start removal:', file)
        const index = files.value.indexOf(file)

        if (index > -1) files.value.splice(index, 1)
        console.log('fetch new list:', files.value)
    }

    return { files, addFiles, removeFile }
}

class UploadableFile {
    constructor(file, meta) {
        this.file = file
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
        this.url = URL.createObjectURL(file)
        this.status = null
        this.meta = { ...meta, xyz: true }
    }
}
