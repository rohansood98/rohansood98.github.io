import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site (rohansood98.github.io) serves at the root, so base = '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
