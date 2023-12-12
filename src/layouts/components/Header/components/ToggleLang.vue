<script lang="ts" setup>
  const theme = useThemeStore();
  const app = useAppStore();
  const { locale } = useI18n();

  const language = ref(app.lang);
  const options = [
    { label: '中文', key: 'zh-CN' },
    { label: 'English', key: 'en' },
  ];
  const handleSelect = (key: string) => {
    language.value = key;
    locale.value = key;
    app.setLang(key);
  };
</script>

<template>
  <hover-container class="w-40px h-full" :inverted="theme.header.inverted">
    <n-dropdown :options="options" trigger="hover" :value="language" @select="handleSelect">
      <i class="i-carbon:language text-18px outline-transparent"></i>
    </n-dropdown>
  </hover-container>
</template>
