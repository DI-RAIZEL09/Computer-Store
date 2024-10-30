import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Это позволяет серверу Vite быть доступным по сети
    port: 3000, // Можно указать любой доступный порт
  },
})
