import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 7000,
    proxy: {
      "/api": {
        "target": "http://node_container:5000",
        secure: false,
        changeOrigin: true
      }
    }
  }
})
