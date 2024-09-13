import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Set the local dev server port
  },
  build: {
    outDir: 'dist', // This is where the production build will be output
  },
  base: '/', // Ensure the base path is set to root for Vercel
})