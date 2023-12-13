<script setup lang="ts">
  import { historyColumns, historyData } from './data';
  import DetailModal from './detailModal.vue';

  definePage({
    meta: { icon: 'i-carbon:carbon:navaid-vhfor', name: 'router.valveHistory', hidden: true },
  });
  const router = useRoute();
  const title = computed(() => (router.query.name as string) || '');
  const detailModal = ref(false);

  const pagination = ref({
    pageSize: 10,
  });
  const columns = computed(() => historyColumns({ action }));
  const action = (_row) => {
    detailModal.value = true;
  };
</script>

<template>
  <div class="p-4">
    <n-card :title="title" class="rounded-2">
      <n-data-table
        :columns="columns"
        :data="historyData"
        :pagination="pagination"
        :bordered="false"
      />
    </n-card>
    <DetailModal v-model:showModal="detailModal" />
  </div>
</template>

<style lang="" scoped></style>
