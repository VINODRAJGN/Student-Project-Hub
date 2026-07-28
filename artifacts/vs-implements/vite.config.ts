import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig(async ({ command }) => {
  // PORT is only required for the local dev / preview server, not for static builds
  const isDevOrPreview = command === 'serve' || command === 'preview';

  let port: number | undefined;
  if (isDevOrPreview) {
    const rawPort = process.env.PORT;
    if (!rawPort) {
      throw new Error(
        'PORT environment variable is required but was not provided.',
      );
    }
    port = Number(rawPort);
    if (Number.isNaN(port) || port <= 0) {
      throw new Error(`Invalid PORT value: "${rawPort}"`);
    }
  }

  // BASE_PATH defaults to '/' for static hosting (Netlify, GitHub Pages, etc.)
  const basePath = process.env.BASE_PATH || '/';

  // Replit-only plugins — skipped outside Replit environment
  const replitPlugins =
    process.env.REPL_ID !== undefined
      ? [
          (await import('@replit/vite-plugin-runtime-error-modal')).default(),
          ...(process.env.NODE_ENV !== 'production'
            ? [
                await import('@replit/vite-plugin-cartographer').then((m) =>
                  m.cartographer({
                    root: path.resolve(import.meta.dirname, '..'),
                  }),
                ),
                await import('@replit/vite-plugin-dev-banner').then((m) =>
                  m.devBanner(),
                ),
              ]
            : []),
        ]
      : [];

  return {
    base: basePath,
    plugins: [react(), tailwindcss(), ...replitPlugins],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, 'src'),
        '@assets': path.resolve(
          import.meta.dirname,
          '..',
          '..',
          'attached_assets',
        ),
      },
      dedupe: ['react', 'react-dom'],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, 'dist/public'),
      emptyOutDir: true,
    },
    ...(port !== undefined && {
      server: {
        port,
        strictPort: true,
        host: '0.0.0.0',
        allowedHosts: true,
        fs: {
          strict: true,
        },
      },
      preview: {
        port,
        host: '0.0.0.0',
        allowedHosts: true,
      },
    }),
  };
});
