import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { VueRouterAutoImports } from 'unplugin-vue-router';

export function configAutoImportPlugin() {
  return [
    AutoImport({
      // 自动导入 vue vue-router
      imports: [
        'vue',
        'vue-i18n',
        VueRouterAutoImports,
        '@vueuse/core',
        {
          'vue-router/auto': ['useLink'],
        },
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
      vueTemplate: true,
      dirs: ['src/store/modules', 'src/components/common'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dts: 'types/components.d.ts',
      resolvers: [IconsResolver(), NaiveUiResolver()],
    }),
    // 自动导入 icon
    Icons({
      autoInstall: true,
    }),
  ];
}
