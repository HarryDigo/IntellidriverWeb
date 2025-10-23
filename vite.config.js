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
      "@assets": path.resolve(__dirname, './src/assets'),
      "@components": path.resolve(__dirname, './src/components'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@services": path.resolve(__dirname, './src/services'),
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
