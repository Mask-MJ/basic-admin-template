<script setup lang="ts">
  import { router } from '@/router';
  import { createColumns, data, type Project } from './data';
  import HistoryModal from './historyModal.vue';
  import ChartModal from './chartModal.vue';

  definePage({
    meta: { icon: 'i-carbon:carbon:navaid-vhfor', name: 'router.valve', hidden: true },
  });
  const route = useRoute();
  const title = computed(() => (route.query.name as string) || '');
  const model = reactive<{
    status_monitor: string;
    travel_dechar: string;
    travel: string;
    supply_pressure: string;
    range: [number, number];
  }>({
    status_monitor: '',
    travel_dechar: '',
    travel: '',
    supply_pressure: '',
    range: [1183135260000, Date.now()],
  });
  const tableData = ref<Project[]>(data);
  const showHistoryModal = ref(false);
  const showChartModal = ref(false);
  const activeId = ref();

  const columns = computed(() => createColumns({ action }));

  const rowKey = (row: Project) => row.no;
  const action = (row, type: number) => {
    if (type === 1) {
      showHistoryModal.value = true;
      activeId.value = row.no;
    } else if (type === 2) {
      router.push({ path: '/system/history', query: { id: row.no, name: row.identifier } });
    } else if (type === 3) {
      showChartModal.value = true;
      activeId.value = row.no;
    } else if (type === 4) {
      // 删除该行数据
      const index = tableData.value.findIndex((item) => item.no === row.no);
      tableData.value.splice(index, 1);
    }
  };
</script>

<template>
  <div class="p-4">
    <n-card class="rounded-2 mb-4">
      <n-form :model="model" label-placement="left">
        <n-grid :x-gap="12">
          <n-form-item-gi :span="8" label="Status Monitor">
            <n-input v-model:value="model.status_monitor" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Travel Dechar">
            <n-input v-model:value="model.travel_dechar" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Travel">
            <n-input v-model:value="model.travel" />
          </n-form-item-gi>
          <n-form-item-gi :span="8" label="Supply Pressure">
            <n-input v-model:value="model.supply_pressure" />
          </n-form-item-gi>
          <n-form-item-gi :span="16" label="创建时间">
            <n-date-picker v-model:value="model.range" class="w-full" type="daterange" clearable />
          </n-form-item-gi>
        </n-grid>
      </n-form>
      <n-space justify="end">
        <n-button type="primary">搜索</n-button>
        <n-button>重置</n-button>
      </n-space>
    </n-card>
    <n-card :title="title" class="rounded-2">
      <template #header-extra>
        <n-button class="mr-4" type="primary" disabled>新建阀门</n-button>
        <n-button type="error" disabled>批量删除</n-button>
      </template>
      <n-data-table
        :columns="columns"
        :data="tableData"
        :single-line="false"
        small="small"
        :row-key="rowKey"
      />
    </n-card>
    <HistoryModal v-model:showModal="showHistoryModal" :active-id="activeId" />
    <ChartModal v-model:showModal="showChartModal" :active-id="activeId" />
  </div>
</template>
