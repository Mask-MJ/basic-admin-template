<script setup lang="ts">
  import { RouterTyped } from 'vue-router/auto';
  import { MenuOption } from 'naive-ui';
  import { RouterLink } from 'vue-router/auto';

  const { t } = useI18n();
  const route = useRoute();
  const app = useAppStore();
  const theme = useThemeStore();
  const router = useRouter() as RouterTyped;

  const expandedKeys = ref<string[]>([]);
  const menus = computed<MenuOption[]>(() => {
    return router
      .getRoutes()
      .filter((route) => route.meta.name && !route.meta.hidden)
      .map((route) => {
        const { icon, name } = route.meta;
        return {
          label: () =>
            h(RouterLink, { to: { path: route.path } }, { default: () => t(name || '') }),
          icon: () => h('i', { class: icon }),
          key: route.path,
          path: route.path,
        };
      });
  });

  const activeKey = computed(() => route.path);
  function handleUpdateExpandedKeys(keys: string[]) {
    expandedKeys.value = keys;
  }

  watch(
    () => route.path,
    () => {
      const temp: string[] = [];
      route.path.split('/').reduce((prev, cur) => {
        const next = prev ? `${prev}/${cur}` : `/${cur}`;
        temp.push(next);
        return next;
      });
      expandedKeys.value = temp;
    },
    { immediate: true },
  );
</script>

<template>
  <n-scrollbar>
    <n-menu
      class="side-menu"
      :value="activeKey"
      :collapsed="app.siderCollapse"
      :collapsed-width="theme.sider.collapsedWidth"
      :collapsed-icon-size="22"
      :options="menus"
      :expanded-keys="expandedKeys"
      accordion
      :indent="18"
      :inverted="theme.sider.inverted"
      @update:expanded-keys="handleUpdateExpandedKeys"
    />
  </n-scrollbar>
</template>

<style lang="scss">
  .side-menu:not(.n-menu--collapsed) {
    .n-menu-item-content {
      &::before {
        left: 5px;
        right: 5px;
      }
      &.n-menu-item-content--selected,
      &:hover {
        &::before {
          border-left: 4px solid var(--primary-color);
        }
      }
    }
  }
</style>
