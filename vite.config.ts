import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : '/web-portofolio-akbar2/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
