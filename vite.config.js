import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: './', // 🔥 INI WAJIB
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})