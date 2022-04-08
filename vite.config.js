import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";
import Layouts from 'vite-plugin-vue-layouts';
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        sourcemap: true  
      },
      strategies: 'injectManifest',
    }),
    Components({
      dirs: [
        "src/components",
        // "src/components/atoms",
        // "src/components/molecules",
        // "src/components/organisms",
        /*'src/layouts'*/
      ],
      deep: true
    }),
    Pages({
      nuxtStyle: true,
      dirs: ["src/pages"]
    }),
    Layouts({
      layoutsDir: 'src/layouts',
      defaultLayout: 'default'
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname, "src")
    },
  },
  server: {
    open: true,
  },
  // build: {
  //   outDir: 'dist' //default
  // }
});
