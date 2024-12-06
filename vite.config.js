import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Study_Spot", // The subpath where the app is hosted
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
