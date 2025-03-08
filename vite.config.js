
import process from 'process';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProduction = process.env.NODE_ENV === 'production';
const basename = isProduction ? "/elun-cat/" : "/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basename,
});
