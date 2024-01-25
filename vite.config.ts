import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';

import react from '@vitejs/plugin-react';

type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
};

// https://vitejs.dev/config/
export default defineConfig(config);
