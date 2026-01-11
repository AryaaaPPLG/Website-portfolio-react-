import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  optimizeDeps: {
    include: ['react-icons', 'react-icons/si', 'react-icons/fa']
  },
  ssr: {
    noExternal: ['react-icons']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules\/react-icons/, /node_modules/]
    }
  },
  assetsInclude: ['**/*.wasm', '**/*.docx'],
  
})
