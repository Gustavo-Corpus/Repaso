import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/repaso/' // Cambia esto para que coincida con el nombre de tu repositorio
})