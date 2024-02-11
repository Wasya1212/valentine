import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://wasya1212.github.io/valentine/',
  plugins: [react()]
})
