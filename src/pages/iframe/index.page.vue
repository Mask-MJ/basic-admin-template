<script setup lang="ts">
  definePage({
    meta: {
      icon: 'i-carbon:chat-bot',
      name: 'router.chat',
    },
  });

  const src = ref('http://localhost:3000/#/chat');
</script>

<template>
  <div class="h-full">
    <iframe class="wh-full" :src="src"></iframe>
  </div>
</template>

<style scoped></style>
