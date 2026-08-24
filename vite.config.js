import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' — the built site also works when opened from a local folder (file://)
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5173,
    watch: {
      // Ignore editor/tool temp files so the watcher never chokes on them
      ignored: [/^\.\./, /\.tmpdir[\\/]/, /\.tmp$/],
    },
  },
})
