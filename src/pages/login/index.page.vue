<script setup lang="ts">
  import { computed } from 'vue';
  import { getColorPalette, mixinColor, getAppEnvConfig } from '@/utils';
  import LoginBg from './loginBg.vue';
  import loginForm from './loginForm.vue';

  const theme = useThemeStore();
  const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();

  const bgThemeColor = computed(() =>
    theme.darkMode ? getColorPalette(theme.themeColor, 7) : theme.themeColor,
  );

  const bgColor = computed(() => {
    const COLOR_WHITE = '#ffffff';
    const ratio = theme.darkMode ? 0.5 : 0.2;
    return mixinColor(COLOR_WHITE, theme.themeColor, ratio);
  });
</script>

<template>
  <div class="relative flex-center wh-full" :style="{ backgroundColor: bgColor }">
    <dark-mode-switch
      :dark="theme.darkMode"
      class="absolute left-48px top-24px z-3 text-20px"
      @update:dark="theme.setDarkMode"
    />
    <n-card :bordered="false" size="large" class="z-4 !w-auto rounded-20px shadow-sm">
      <div class="w-300px sm:w-360px">
        <header class="flex-y-center justify-between">
          <system-logo class="text-64px text-primary" />
          <n-gradient-text type="primary" :size="28">{{ VITE_GLOB_APP_TITLE }}</n-gradient-text>
        </header>
        <main class="pt-24px">
          <h3 class="text-18px text-primary font-medium">用户登录</h3>
          <div class="pt-24px">
            <loginForm />
          </div>
        </main>
      </div>
    </n-card>
    <LoginBg :theme-color="bgThemeColor" />
  </div>
</template>

<style scoped></style>
