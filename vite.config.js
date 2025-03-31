import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/repaso/',  // Esto coincide con tu URL de GitHub Pages
})