import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,       // Local dev port (optional)
  },
  base: '/',          // Critical for asset paths in production
});