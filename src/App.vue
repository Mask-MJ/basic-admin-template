<script setup lang="ts">
  import { dateZhCN, zhCN } from 'naive-ui';
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" class="h-full">
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>
