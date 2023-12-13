<script setup lang="ts">
  import { NTag, NButton } from 'naive-ui';
  import AnalysisModal from './analysisModal.vue';

  defineProps({
    showModal: { type: Boolean, default: false },
    activeId: { type: Number },
  });
  const emit = defineEmits(['update:showModal']);
  const showAnalysisModal = ref(false);
  const data = [
    { name: 'pdf1', status: 0 },
    { name: 'pdf2', status: 1 },
    { name: 'pdf3', status: 1 },
  ];

  const columns = [
    { title: '文件名称', key: 'name' },
    {
      title: '状态',
      key: 'status',
      render: (row) => {
        return h(NTag, { type: row.status === 0 ? 'error' : 'success' }, () =>
          row.status === 0 ? '未校验' : '已校验',
        );
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (row) => {
        return row.status === 0
          ? h(
              NButton,
              {
                type: 'info',
                onClick: () => {
                  showAnalysisModal.value = true;
                },
              },
              () => '校验',
            )
          : '';
      },
    },
  ];

  const close = () => {
    emit('update:showModal', false);
  };
  const submitCallback = () => {
    close();
  };
</script>

<template>
  <n-modal
    :show="showModal"
    preset="dialog"
    title="校验数据"
    positive-text="录入数据库"
    negative-text="取消"
    @positive-click="submitCallback"
    @update:show="close"
  >
    <n-data-table :columns="columns" :data="data" :bordered="false" />
    <AnalysisModal v-model:showModal="showAnalysisModal" />
  </n-modal>
</template>

<style lang="" scoped></style>
