import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'
import viteImagemin from 'vite-plugin-imagemin'
import AutoImport from 'unplugin-auto-import/vite'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        // eslintPlugin(),
        AutoImport({
            imports: [
                // // presets
                'vue'
                // 'vue-router',
                // custom
                // {
                // 'vue': ['ref'],
                // },
                // {
                // '@vue/reactivity': ['computed']
                // }
            ]
        }),
        viteImagemin({
            webp: {
                enabled: true,
                quality: 50,
                alphaQuality: 50
            },
            mozjpeg: {
                enabled: true
            }
        }),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                sourcemap: true
            },
            strategies: 'injectManifest'
        }),
        Components({
            dirs: ['src/components'],
            deep: true
        }),
        Pages({
            nuxtStyle: true,
            dirs: ['src/pages']
        }),
        Layouts({
            layoutsDir: 'src/layouts',
            defaultLayout: 'default'
        })
    ],
    resolve: {
        alias: {
            '@composables': resolve(__dirname, 'src/components/composables'),
            '@content': resolve(
                __dirname,
                'src/components/composables/useContent'
            ),
            '@': resolve(__dirname, 'src'),
            '~': resolve(__dirname, 'src')
        }
    },
    server: {
        open: true
    }
    // build: {
    //   outDir: 'dist' //default
    // }
})
