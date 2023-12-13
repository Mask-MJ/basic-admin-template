<script setup lang="ts">
  import { historyColumns, historyData } from './data';
  import DetailModal from './detailModal.vue';
  defineProps({
    showModal: { type: Boolean, default: false },
    activeId: { type: Number },
  });
  const emit = defineEmits(['update:showModal']);
  const detailModal = ref(false);
  const pagination = ref({
    pageSize: 10,
  });

  const columns = computed(() => historyColumns({ action }));
  const action = (_row) => {
    detailModal.value = true;
  };
  const close = () => {
    emit('update:showModal', false);
  };
  const submitCallback = () => {
    close();
  };
</script>

<template>
  <n-modal
    class="!w-4/5"
    :show="showModal"
    preset="dialog"
    title="阀门历史数据"
    negative-text="取消"
    @positive-click="submitCallback"
    @update:show="close"
  >
    <n-data-table
      :columns="columns"
      :data="historyData"
      :pagination="pagination"
      :bordered="false"
    />
    <DetailModal v-model:showModal="detailModal" />
  </n-modal>
</template>
