import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["webs-tienda-portafolio-5ectpg-2a9cd9-190-166-109-120.traefik.me"],
  },
})
