import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueMacros.vite({ plugins: { vue: vue() }})],
  // plugins: [vue()],
})
