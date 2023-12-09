import type { ConfigEnv, UserConfig } from 'vite';
import { resolve } from 'node:path';
import { loadEnv } from 'vite';
import { createVitePlugins, wrapperEnv } from './build';

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PORT, VITE_PROXY, VITE_DROP_CONSOLE, VITE_PUBLIC_PATH } = viteEnv;
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: {
        '@': `${resolve(root, 'src')}`,
        '#': `${resolve(root, 'types')}`,
      },
    },
    server: {
      port: VITE_PORT,
      host: true,
      proxy: {
        '/api': {
          target: VITE_PROXY,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      reportCompressedSize: false,
      outDir: 'dist',
      chunkSizeWarningLimit: 2000,
    },
    css: {
      preprocessorOptions: {},
    },
    plugins: createVitePlugins(),
  };
};
