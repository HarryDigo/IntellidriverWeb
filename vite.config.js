import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, './'),
      "@assets": path.resolve(__dirname, './src/assets'),
      // "@contexts": path.resolve(__dirname, './src/contexts'),
      "@components": path.resolve(__dirname, './src/components'),
      // "@hooks": path.resolve(__dirname, './src/hooks'),
      // "@layouts": path.resolve(__dirname, './src/layouts'),
      "@pages": path.resolve(__dirname, './src/pages'),
      // "@services": path.resolve(__dirname, './src/services'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: { 
        silenceDeprecations: ['color-functions', 'global-builtin', 'import']
      }
    }
  },
})
