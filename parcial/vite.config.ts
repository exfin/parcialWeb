import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are resolved correctly when deployed
  build: {
    outDir: 'dist', // Ensures the output directory matches Netlify's expectations
  },
})
