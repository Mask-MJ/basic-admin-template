export interface ViteEnv {
  VITE_PORT: number;
  VITE_GLOB_APP_TITLE: string;
  VITE_PUBLIC_PATH: string;
  VITE_DROP_CONSOLE: boolean;
  VITE_GLOB_API_URL_PREFIX: string;
  VITE_PROXY: string;
}

export function wrapperEnv(envConf: Record<string, any>): ViteEnv {
  const viteEnv: Partial<ViteEnv> = {};
  for (const key of Object.keys(envConf)) {
    let val = envConf[key].replace(/\\n/g, '\n');
    val = val === 'true' ? true : val === 'false' ? false : val;
    if (key === 'VITE_PORT') {
      val = Number(val);
    }
    if (key === 'VITE_PROXY') {
      try {
        val = JSON.parse(val);
      } catch (error) {}
    }
    viteEnv[key as keyof ViteEnv] = val;
    process.env[key] = val;
  }
  return viteEnv as ViteEnv;
}
