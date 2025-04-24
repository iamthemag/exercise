import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Dynamically use PORT env var or fallback to 3000
    strictPort: true,  // Prevents Vite from using an auto-chosen port if 3000 is taken
  },
})
