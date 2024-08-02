import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',  // Set the root directory to src
  publicDir: '../public',  // Reference the public directory correctly
  plugins: [react()],
})
