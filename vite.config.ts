import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: { plugins: [] },
      jsxImportSource: 'react',
      fastRefresh: false, // ✅ HMR 중복 방지
    }),
  ],
})
