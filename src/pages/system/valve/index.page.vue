<script setup lang="ts">
  import { createColumns, data, type Project } from './data';
  import EditModal from './modal.vue';

  definePage({
    meta: {
      icon: 'i-carbon:ibm-cloud-projects',
      name: 'router.valve',
    },
  });
  const router = useRoute();
  const title = computed(() => (router.query.name as string) || '');
  const model = reactive<{
    name: string;
    range: [number, number];
  }>({
    name: '',
    range: [1183135260000, Date.now()],
  });
  const tableData = ref<Project[]>(data);
  const edit = ref(false);
  const activeId = ref();

  const columns = computed(() => createColumns({ action }));

  const rowKey = (row: Project) => row.no;
  const action = (row: Project, type: number) => {
    if (type === 1) {
      edit.value = true;
      activeId.value = row.no;
    } else if (type === 2) {
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
          <n-form-item-gi :span="8" label="项目名称">
            <n-input v-model:value="model.name" placeholder="请输入项目名称" />
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
        <n-button class="mr-4" type="primary">新建项目</n-button>
        <n-button type="error">批量删除</n-button>
      </template>
      <n-data-table
        :columns="columns"
        :data="tableData"
        :single-line="false"
        small="small"
        :row-key="rowKey"
      />
    </n-card>
    <EditModal v-model:showModal="edit" :active-id="activeId" />
  </div>
</template>

<style lang="" scoped></style>
