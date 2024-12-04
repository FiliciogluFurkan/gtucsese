import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    svgr(), tsconfigPaths()],
    resolve: {
    alias: {
      '@': '/src',  // This tells Vite to resolve `@/` to the `src/` directory.
    }
  },
    // Explicitly reference the correct tsconfig file if needed
    /* esbuild: {
      tsconfigRaw: './tsconfig.node.json',  // Point to your app-specific tsconfig
    } */
})

